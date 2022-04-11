import * as React from 'react';
import { useParams } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';

import { newsArchives } from '../../settings/archives/newsArchive';
import { accountService, alertService, newsService } from '../../_services';

export const AuthContext = React.createContext(null);

// RegExp
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const ContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(accountService.userValue);
  const [rows, setRows] = React.useState([]);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => newsService.getAll().then(x => setRows(x)),[rows]);
  React.useEffect(() => setItems(newsArchives), [items]);
  const [articles, setArticles] = React.useState(rows);
  const [searchText, setSearchText] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [article, setArticle] = React.useState({});
  const [archives, setArchives] = React.useState(items);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // IDs
  const {artId} = useParams();

  /**
   * 
   * @param {email} email 
   * @param {password} password 
   * @returns 
   */
  netlifyIdentity.on("login", (user) => {
    setUser(user);
    setIsLoggedIn(true);
  });

  netlifyIdentity.on("logout", (user) => {
    setUser(null);
    setIsLoggedIn(false);
  });

  /**
   * Context of Subscribing
   */

  function saveEmail(params) {
    return fetchWrapper.post(`${subsUrl}/saveemail`, params);
  }

  function getAllEmails() {
    return fetchWrapper.get(subsUrl);
  }
  
  function getEmailById(id) {
    return fetchWrapper.get(`${subsUrl}/${id}`);
  }
  
  async function deleteEmail(id) {
    const x = await fetchWrapper.delete(`${subsUrl}/${id}`);
    return x;
  }

  /**
   * 
   * @param {message, date, title} params 
   * @returns 
   */

  function sendmessage(params) {
    return fetchWrapper.post(`${contUrl}/sendmessage`, params);
  }
  
  function getAllMessages() {
    return fetchWrapper.get(contUrl);
  }
  
  function getMessageById(id) {
    return fetchWrapper.get(`${contUrl}/${id}`);
  }
  
  function createMessage(params) {
    return fetchWrapper.post(contUrl, params);
  }
  
  // prefixed with underscore because 'delete' is a reserved word in javascript
  async function deleteMessage(id) {
    const x = await fetchWrapper.delete(`${contUrl}/${id}`);
    return x;
  }

  /**
   * 
   * @param {title, author, date} params 
   * @returns 
   */

  function saveNews(params) {
    return newsService.saveNews(params);
  }
  
  function getArticleById(id) {
    return newsService.getById(id);
  }
  
  function createArticle(params) {
    return fetchWrapper.post(newsUrl, params);
  }
  
  async function updateArticle(id, params) {
    const article = await fetchWrapper.put(`${newsUrl}/${id}`, params);
    setArticles(article);
    return article;
  }
  
  // prefixed with underscore because 'delete' is a reserved word in javascript
  async function deleteArticle(id) {
    const x = await fetchWrapper.delete(`${newsUrl}/${id}`);
    setArticles(x);
    return x;
  }

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setArticles(filteredRows);
  };

  const archiveSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = newsArchives.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setArchives(filteredRows);
  };

  /**
   * Use Effect to strudge throught database for open data
   */
  React.useEffect(() => {
    /** Get a single News article By ID */
    newsService.getById(artId).then(x => setArticle(x));
  }, [article]);

  /**
   * Values set into Context
   */
  const value = {
    /** Account */
    done,
    isLoggedIn,
    user,
    /** Subscribing */
    saveEmail,
    getAllEmails,
    getEmailById,
    deleteEmail,
    /** Contact Us Context */
    sendmessage,
    getAllMessages,
    getMessageById,
    createMessage,
    deleteMessage,
    /** News Context */
    saveNews,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    articles,
    requestSearch,
    searchText,
    article,
    archives,
    archiveSearch
  };

  return (<AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>);
};

/**
 * 
 * @returns Context
 */
export const useCTX = () => {
  return React.useContext(AuthContext);
};
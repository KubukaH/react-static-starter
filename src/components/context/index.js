import * as React from 'react';
import { useParams } from "react-router-dom";
import { useNetlifyIdentity } from "react-netlify-identity"

import { newsArchives } from '../../settings/archives/newsArchive';
import { newsService } from '../../_services';

export const AuthContext = React.createContext();

// RegExp
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const ContextProvider = ({ children }) => {
  /**
   * Identity
   */
  const [url, setUrl] = React.useState(window.location.origin);
  React.useEffect(() => setUrl("https://basilwizi.netlify.app"));
  const identity = useNetlifyIdentity(url);

  const [rows, setRows] = React.useState([]);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => newsService.getAll().then(x => setRows(x)),[rows]);
  React.useEffect(() => setItems(newsArchives), [items]);
  const [articles, setArticles] = React.useState(rows);
  const [searchText, setSearchText] = React.useState('');
  const [article, setArticle] = React.useState({});
  const [archives, setArchives] = React.useState(items);

  // IDs
  const { artId } = useParams();

  /**
   * 
   * @param {title, author, date} params 
   * @returns 
   */

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

  const value = {
    ...identity,
    /** News Context */
    articles,
    requestSearch,
    searchText,
    article,
    archives,
    archiveSearch
  }

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
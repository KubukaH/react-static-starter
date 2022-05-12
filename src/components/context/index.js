import * as React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useNetlifyIdentity } from "react-netlify-identity";

import { newsArchives } from '../../settings/archives/newsArchive';
import { newsService, likeService } from '../../_services';

export const AuthContext = React.createContext();

// RegExp
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const ContextProvider = ({ children }) => {
  /**
   * Identity
   */
  const [url] = React.useState("https://basilwizi.netlify.app");
  const identity = useNetlifyIdentity(url);

  const [rows, setRows] = React.useState([]);
  const [articles, setArticles] = React.useState([]);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => setItems(newsArchives), [items]);
  const [archives, setArchives] = React.useState(items);
  const [searchText, setSearchText] = React.useState('');
  const [likes, setLikes] = React.useState([]);

  const { pid } = useParams();
  const searchParams = new URLSearchParams(pid);
  const uaid = searchParams.get('uaid');

  /**
   * 
   * @param {message, date, title} params 
   * @returns 
   */

  /**
   * 
   * @param {title, author, date} params 
   * @returns An object
   */

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setArticles( filteredRows );
  };

  const archiveSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = items.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setArchives(filteredRows);
  };

  /**
   * Use Effect to strudge through database for open data
   */
  // news service db
  React.useEffect(() => {newsService.getAll().then(x => {
    if (!searchText) {
      setArticles(x);
    } else { setRows(x) };
  })},[rows, articles, searchText]);

  React.useEffect(() => {
    likeService.getAll().then(x => {
      const its = x.filter(f => f.like_to === uaid);
      setLikes(its);
    });
  },[likes]);

  const value = {
    /**
     * Will spread the Identity widgets to context
     */
    ...identity,
    /** News Context */
    articles,
    requestSearch,
    searchText,
    archives,
    archiveSearch,
    likes
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
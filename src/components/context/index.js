import * as React from "react";
import { useNetlifyIdentity } from "react-netlify-identity";

let IdentityContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [url, setUrl] = React.useState(window.location.origin);
  React.useEffect(() => setUrl("https://basilwizi.netlify.app"));
  const identity = useNetlifyIdentity(url);

  return <IdentityContext.Provider value={identity}>
    {children}
  </IdentityContext.Provider>;
};

/**
 * 
 * @returns Context
 */
 export const useCTX = () => {
  return React.useContext(IdentityContext);
};
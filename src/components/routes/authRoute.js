import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useCTX } from "../context";

export default function OpenRoute({ children }) {
  const auth = useCTX();
  const { isLoggedIn } = auth;
  const location = useLocation();

  if (isLoggedIn) {
    // Redirect them to the /Home page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

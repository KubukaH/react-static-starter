import * as React from "react";
import { useRoutes } from "react-router-dom";

// MUI components
import Box from "@mui/material/Box";
import NewsLayout from "../../components/Layouts/newsLayout";
import NewsHeadlines from "./headlines";
import NotFound from "../../404/NotFound";
import NewsArticle from "./article";

const NewsIndex = () => {
  const routes = [
    {
      path: "",
      element: <NewsLayout />,
      children: [
        { index: true, element: <NewsHeadlines /> },
        { path: ":id", element: <NewsArticle /> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ];

  const element = useRoutes(routes);

  return (
    <>
    {element}
    </>
  );
}

export default NewsIndex;
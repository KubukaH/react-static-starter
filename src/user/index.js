import * as React from "react";
import { useRoutes } from "react-router-dom";

import Box from "@mui/material/Box";
import PagesLayout from "../components/Layouts/pagesLayout";

const routes = [
  {
    path: "profile",
    element: <PagesLayout />,
    /*children: [
      { index: true, element }
    ]*/
  }
];

const UserIndex = () => {
  const element = useRoutes(routes);
  return (
    <>
    {element}
    </>
  );
};

export default UserIndex;
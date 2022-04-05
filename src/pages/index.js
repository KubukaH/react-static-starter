import * as React from "react";
import { useRoutes } from "react-router-dom";

// Local Imports
import PagesLayout from "../components/Layouts/pagesLayout";
import AdvisoryCouncil from "./about/advisoryCouncil";
import BoardMembers from "./about/boardMembers";
import Secretariat from "./about/secreteriat";
import ContactIndex from "./contact";
import NewsArticle from "./news/article";
import NewsHeadlines from "./news/headlines";
import PartnersPage from "./partners";
import MissionStatement from "./statement";
import NotFound from "../404/NotFound";
import SignIn from "../account/signin";
import AboutLayout from "../components/Layouts/aboutLayout";
import AccountLayout from "../components/Layouts/accountLayout";
import NewsLayout from "../components/Layouts/newsLayout";
import SignUp from "../account/signup";
import ArchiveHeadlines from "./archives/heads";
import ArchiveMain from "./archives/arch";

const PagesIndex = () => {
  const routes = [
    {
      path: "",
      element: <PagesLayout />,
      children: [
        {index: true, element: <MissionStatement />},
        {path: "partners-and-sponsors", element: <PartnersPage />},
        {path: "contact", element: <ContactIndex />},
        {
          path: "about",
          element: <AboutLayout />,
          children: [
            {
              index: true,
              element: <Secretariat />
            },
            {
              path: "board-members",
              element: <BoardMembers />
            },
            {
              path: "advisory-council",
              element: <AdvisoryCouncil />
            }
          ]
        },
        {
          path: "online-news",
          element: <NewsLayout />,
          children: [
            {index: true, element: <NewsHeadlines />},
            {path: ":artId", element: <NewsArticle />}
          ]
        },
        {
          path: "acc",
          element: <AccountLayout />,
          children: [
            {index: true, element: <SignIn />},
            {path: "signup", element: <SignUp />}
          ]
        },
        {
          path: "archives",
          element: <NewsLayout />,
          children: [
            {index: true, element: <ArchiveHeadlines />},
            {path: ":arcId", element: <ArchiveMain />}
          ]
        },
        {path: "*", element: <NotFound />}
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

export default PagesIndex;
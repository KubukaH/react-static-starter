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
import ProjectsEvaluation from "./publications/projectsEvaluation";
import OtherDocuments from "./publications/others";
import Newsletters from "./publications/newsletter";
import AnnualReports from "./publications/annualReports";
import MailingOrder from "./publications/mailing";
import CurrentNewsletter from "./publications/newsletter/currentNewsletter";
import ProgrammesIndex from "./programmes";

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
          element: <NewsLayout title="News Online" />,
          children: [
            {index: true, element: <NewsHeadlines />},
            {path: ":artId", element: <NewsArticle />}
          ]
        },
        {
          path: "accounts",
          element: <AccountLayout />,
          children: [
            {index: true, element: <SignIn />},
            {path: "signup", element: <SignUp />}
          ]
        },
        {
          path: "previous-archived",
          element: <NewsLayout title="News Archives" />,
          children: [
            {index: true, element: <ArchiveHeadlines />},
            {path: ":arcId", element: <ArchiveMain />}
          ]
        },
        {
          path: "project-evaluations",
          element: <NewsLayout title="Project Evaluation" />,
          children: [
            {index: true, element: <ProjectsEvaluation />}
          ]
        },
        {
          path: "other-documents",
          element: <NewsLayout title="Other Documents" />,
          children: [
            {index: true, element: <OtherDocuments />}
          ]
        },
        {
          path: "newsletter",
          element: <NewsLayout title="Current Newsletter" />,
          children: [
            {index: true, element: <CurrentNewsletter />}
          ]
        },
        /**
         * Previous Copies availble online
         */
        {
          path: "previous-issues",
          element: <NewsLayout title="Archived Newsletter" />,
          children: [
            {index: true, element: <Newsletters />}
          ]
        },
        {
          path: "annual-reports",
          element: <NewsLayout title="Annual Reports" />,
          children: [
            {index: true, element: <AnnualReports />}
          ]
        },
        {
          path: "order-yours",
          element: <NewsLayout title="Order a copy" />,
          children: [
            {index: true, element: <MailingOrder />}
          ]
        },
        {
          path: ":id",
          element: <ProgrammesIndex />,
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
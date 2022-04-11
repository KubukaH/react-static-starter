import * as React from 'react';

import MenusIndex from '.';

// POPUP Menu Options
const menuOptions = [
  {
    columnHeadTitle: "News Online",
    links: [
      {
        name: "Current affairs",
        url: "/basilwizi/online-news"
      },
      {
        name: "Previus Archived",
        url: "/basilwizi/previous-archived"
      },
      {
        name: "News from accross the river",
        url: "/basilwizi/online-news"
      },
    ]
  },
  {
    columnHeadTitle: "Newsletter",
    links: [
      {
        name: "Current issue",
        url: "/basilwizi/newsletter"
      },
      {
        name: "Previous Issues",
        url: "/basilwizi/previous-issues"
      },
      {
        name: "Order yours today",
        url: "/basilwizi/order-yours"
      },
    ]
  },
  {
    columnHeadTitle: "Annual Report",
    links: [
      {
        name: "Current Year Reports",
        url: "/basilwizi/annual-reports"
      },
      {
        name: "Previous Years (Archives)",
        url: "/basilwizi/annual-reports"
      },
      {
        name: "Related paperwork",
        url: "/basilwizi/annual-reports"
      },
    ]
  },
  {
    columnHeadTitle: "Project evaluations",
    links: [
      {
        name: "Project processes",
        url: "/basilwizi/project-evaluations"
      },
      {
        name: "Project evaluations reports",
        url: "/basilwizi/project-evaluations"
      },
      {
        name: "Field projects",
        url: "/basilwizi/project-evaluations"
      },
    ]
  },
  {
    columnHeadTitle: "Other documents",
    links: [
      {
        name: "Field work forms",
        url: "/basilwizi/other-documents"
      },
      {
        name: "Request of resources forms",
        url: "/basilwizi/other-documents"
      },
      {
        name: "travel and subsistence forms",
        url: "/basilwizi/other-documents"
      },
    ]
  }
];

const PublicationsMenu = () => {
  return (
    <MenusIndex
      headTitle="Basilwizi Trust - Twabane News - Sharing Tonga"
      navTitle="Publications"
      columns={menuOptions}
    />
  );
}

export default PublicationsMenu;
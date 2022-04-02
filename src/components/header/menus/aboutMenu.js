import * as React from 'react';
import MenusIndex from '.';

// POPUP Menu Options
const menuOptions = [
  {
    columnHeadTitle: "Secretariat & Management",
    links: [
      {
        name: "Director",
        url: "/basilwizi/about/secretariat-and-management"
      },
      {
        name: "Management",
        url: "/basilwizi/about/secretariat-and-management"
      },
      {
        name: "Field Officers",
        url: "/basilwizi/about/secretariat-and-management"
      },
    ]
  },
  {
    columnHeadTitle: "Board Members",
    links: [
      {
        name: "Chairman",
        url: "/basilwizi/about/board-members"
      },
      {
        name: "Treasury department",
        url: "/basilwizi/about/board-members"
      },
      {
        name: "All Members",
        url: "/basilwizi/about/board-members"
      },
    ]
  },
  {
    columnHeadTitle: "Advisory Council",
    links: [
      {
        name: "Members",
        url: "/basilwizi/about/advisory-council"
      },
      {
        name: "Meetings",
        url: "/basilwizi/about/advisory-council"
      },
      {
        name: "Roles",
        url: "/basilwizi/about/advisory-council"
      },
    ]
  }
];

const AboutMenu = () => {
  return (
    <MenusIndex
      headTitle="Basilwizi Trust"
      navTitle="About us"
      columns={menuOptions}
    />
  );
}

export default AboutMenu;
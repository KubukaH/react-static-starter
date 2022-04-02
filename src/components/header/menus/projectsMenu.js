import * as React from 'react';
import MenusIndex from '.';

// POPUP Menu Options
const menuOptions = [
  {
    columnHeadTitle: "Governance Programme",
    links: [
      {
        name: "Governance & public accountability",
        url: "/basilwizi/governance-programme"
      },
      {
        name: "Local rights",
        url: "/basilwizi/governance-programme"
      },
      {
        name: "Women empowerment",
        url: "/basilwizi/governance-programme"
      },
    ]
  },
  {
    columnHeadTitle: "Education & Culture Support",
    links: [
      {
        name: "Language and culture",
        url: "/basilwizi/education-and-culture"
      },
      {
        name: "Tonga online",
        url: "/basilwizi/education-and-culture"
      },
      {
        name: "Information Creation, Access and Sharing",
        url: "/basilwizi/education-and-culture"
      },
    ]
  },
  {
    columnHeadTitle: "Lvelihoods Programme",
    links: [
      {
        name: "Integrated Acquaculture Agriculture",
        url: "/basilwizi/livelihoods-programme"
      },
      {
        name: "Protracted Relief Projects",
        url: "/basilwizi/livelihoods-programme"
      },
      {
        name: "Self Help Groups",
        url: "/basilwizi/livelihoods-programme"
      },
    ]
  },
  {
    columnHeadTitle: "HIV & AIDS Programme",
    links: [
      {
        name: "Programmes",
        url: "/basilwizi/hiv-aids-programme"
      },
      {
        name: "Projects",
        url: "/basilwizi/hiv-aids-programme"
      },
      {
        name: "Community engagement",
        url: "/basilwizi/hiv-aids-programme"
      },
    ]
  },
];

const ProjectsMenu = () => {
  return (
    <MenusIndex
      headTitle="Programmes and Projects"
      navTitle="Programmes & Projects"
      columns={menuOptions}
    />
  );
}

export default ProjectsMenu;
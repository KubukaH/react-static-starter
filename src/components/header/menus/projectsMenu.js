import * as React from 'react';
import MenusIndex from '.';

// POPUP Menu Options
const menuOptions = [
  {
    columnHeadTitle: "Governance Programme",
    links: [
      {
        name: "Governance & public accountability",
        url: "/basilwizi/participatory-local-governance-and-public-accountability-project"
      },
      {
        name: "Local rights",
        url: "/basilwizi/local-rights"
      },
      {
        name: "Women empowerment",
        url: "/basilwizi/women-economic-empowerment-project"
      },
    ]
  },
  {
    columnHeadTitle: "Education & Culture Support",
    links: [
      {
        name: "Language and culture",
        url: "/basilwizi/language-and-culture-project"
      },
      {
        name: "Tonga online",
        url: "/basilwizi/tonga-online-project"
      },
      {
        name: "Information Creation, Access and Sharing",
        url: "/basilwizi/integrated-information-creation-access-and-sharing"
      },
    ]
  },
  {
    columnHeadTitle: "Lvelihoods Programme",
    links: [
      {
        name: "Integrated Acquaculture Agriculture",
        url: "/basilwizi/integrated-aquaculture-agriculture-project"
      },
      {
        name: "Protracted Relief Projects",
        url: "/basilwizi/protracted-relief-projects-binga-and-gokwe-north"
      },
      {
        name: "Self Help Groups",
        url: "/basilwizi/self-help-groups"
      },
    ]
  },
  {
    columnHeadTitle: "HIV & AIDS Programme",
    links: [
      {
        name: "Programmes",
        url: "/basilwizi/health-HIV-and-AIDS-programme"
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
import * as React from 'react';
import MenusIndex from '.';

const menus = [
  {
    columnHeadTitle: "Home",
    links: [
      {name: "Home",
      url: "/"}
    ]
  },
  {
    columnHeadTitle: "Mission Statement",
    links: [
      {
        name: "Vision",
        url: "/basilwizi#vision"
      },
      {
        name: "Mission",
        url: "/basilwizi#mission"
      },
      {
        name: "Motto",
        url: "/basilwizi#motto"
      },
      /*{
        name: "Core values",
        url: "/basilwizi/#core-values"
      },
      {
        name: "Objectives",
        url: "/basilwizi/#objectives"
      },
      {
        name: "Mandate",
        url: "/basilwizi/#mandate"
      },*/
    ]
  }
];

const HomeMenu = () => {
  return (
    <MenusIndex
      headTitle="Basilwizi Trust - Home"
      navTitle="Home"
      columns={menus}
    />
  );
}

export default HomeMenu;
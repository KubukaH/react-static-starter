import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import { Box } from '@mui/system';
import { alpha, useTheme } from '@mui/material/styles';

const AboutSideMenu = ({ headTitle, navTitle, columns }) => {
  const theme = useTheme();

  return (
    <Box 
      component="div"
      className="dropdown"
    >
      <Box
        className="dropbtn"
      >
        {navTitle}
      </Box>
      <Box
        component="div"
        className="dropdown-content"
      >
        <Box
          component="div"
          className="header"
        >
          <Box
            sx={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            {headTitle}
          </Box>
        </Box>
        <Box 
          className="row"
          component="div"
        >
          {
            columns.map((column) => (
              <Box 
                className="column"
                component="div"
              >
                <h3>
                  {
                    column.columnHeadTitle
                  }
                </h3>
                {
                  column.links.map((link) => (
                    <Link to={link.url}>
                      {link.name}
                    </Link>
                  ))
                }
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSideMenu;
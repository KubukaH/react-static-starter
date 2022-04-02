import * as React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import { Box } from '@mui/system';
import { alpha, useTheme } from '@mui/material/styles';

const MenusIndex = ({ headTitle, navTitle, columns, navLink }) => {
  const theme = useTheme();

  return (
    <Box 
      component="div"
      className="dropdown"
    >
      {
        navLink 
        ? (
          <React.Fragment>
            <Box
              className="dropbtn"
            >
              {navTitle}
            </Box>
            <Box
              className="dropdown-content"
            >
              <Box
                className="header"
              >
                <Box
                  component={Link}
                  to={navLink}
                  sx={{
                    fontSize: 20,
                    color: "#fff",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  {headTitle}
                </Box>
              </Box>
            </Box>
          </React.Fragment>
        )
        : (
          <React.Fragment>
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
                      key={column.columnHeadTitle}
                    >
                      <h3>
                        {
                          column.columnHeadTitle
                        }
                      </h3>
                      {
                        column.links.map((lnk) => (
                          <Link to={lnk.url} key={lnk.name}>
                            {lnk.name}
                          </Link>
                        ))
                      }
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </React.Fragment>
        )
      }
    </Box>
  );
}

export default MenusIndex;
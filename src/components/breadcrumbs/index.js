import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    p: 1,
    cursor: "pointer",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const BreadCrumbsPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs 
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <StyledBreadcrumb
        component={RouterLink}
        to="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <StyledBreadcrumb
            label={value}
            component={RouterLink}
            deleteIcon={<ExpandMoreIcon />}
            key={to}
            to={to}
          />
        ) : (
          <StyledBreadcrumb 
            component={RouterLink} 
            to={to} 
            label={value} 
            key={to}
          />
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbsPage;

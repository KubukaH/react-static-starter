import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import { useCTX } from '../../context';

// Custom components imports

const ProfileMenu = () => {
  const navigate = useNavigate();
  const auth = useCTX();
  const { logoutUser, user, isLoggedIn } = auth;

  if(!isLoggedIn) return (
    <Box className="dropdown">
      <Box 
        className="dropbtn"
      >
        Login
      </Box>
      <Box className="dropdown-content">
        <Box className="header">
          <Box
            sx={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              float: "right",
              textDecoration: "none",
              height: "auto"
            }}
            component={Link}
            to="/basilwizi/accounts"
          >
            Login or Signup for more 
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className="dropdown">
      <Box className="dropbtn">
        {user.email.slice(0,7)}
      </Box>
      <Box className="dropdown-content">
        <Box className="header">
          <Box
            sx={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            Basilwizi Trust - Signed In as {user.email}
          </Box>
        </Box>
        <Box className="row">
          <Box className="column">
            <h3>
              User
            </h3>
          </Box>
          <Box className="column">
            <h3>
              User Management
            </h3>
            <Box component={Link} to="/profile">
              Profile
            </Box>
            <Box component={Link} to="/edit">
              Edit Account
            </Box>
          </Box>
          <Box className="column">
            <h3>
              Actions
            </h3>
            <Box
              component={Link}
              to="#"
            >
              Delete Account
            </Box>
            <Box
              onClick={logoutUser}
              component="a"
              href="#"
            >
              Sign Out
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileMenu;
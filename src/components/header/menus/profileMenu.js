import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import { useCTX } from '../../context';
import Writer from '../../../settings/writer';

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
        Account
      </Box>
      <Box className="dropdown-content">
        <Box className="header">
          <Box
            sx={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
              height: "auto"
            }}
          >
            Account Management and Settings
          </Box>
        </Box>
        <Box className="row">
          <Box className="column">
            <h3>
              Account One
            </h3>
          </Box>
          <Box className="column">
            <h3>
              Actions
            </h3>
            <Writer />
            <Box
              component="a"
              href="#"
            >
              Discussion Forum
            </Box>
          </Box>
          <Box className="column">
            <h3>
              Logging Management
            </h3>
            <Box 
              component={Link}
              to="/basilwizi/accounts"
            >
              Login
            </Box>
            <Box component={Link} to="/basilwizi/accounts/signup">
              Sign up
            </Box>
            <Box component={Link} to="/basilwizi/accounts/forgot-password">
              Forgot password
            </Box>
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
              component='a'
              href="#"
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
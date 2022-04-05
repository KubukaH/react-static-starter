import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import { useCTX } from '../../context';

// Custom components imports

const ProfileMenu = () => {
  const navigate = useNavigate();
  const auth = useCTX();
  const { signout, user } = auth;
  console.log(user.firstName);

  if(!user) return null;

  return (
    <Box className="dropdown">
      <Box className="dropbtn">
        {user.firstName}
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
            Basilwizi Trust - Signed In as {user.firstName+ ' ' +user.lastName}
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
              onClick={() => signout(navigate("/", {replace: true}))}
              component={Link}
              to="#"
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
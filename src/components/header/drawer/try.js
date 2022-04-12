import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

// MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Home from '@mui/icons-material/Home';
import ChromeReader from '@mui/icons-material/ChromeReaderModeTwoTone';
import PermContactCalendar from '@mui/icons-material/PermContactCalendarTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { useCTX } from '../../context';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function GmailTreeView({ closeDrawer }) {
  const navigate = useNavigate();
  const ctx = useCTX();
  const { isLoggedIn, user, logoutUser } = ctx;

  const actionItem = (s) => {
    closeDrawer();
    navigate(s, { replace: true });
  }

  return (
    <TreeView
      aria-label="basilwizi-webapp"
      defaultExpanded={['2']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 528, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <StyledTreeItem 
        nodeId="1" labelText="Home" 
        labelIcon={Home}
        onClick={() => actionItem("/")}
      />
      <StyledTreeItem nodeId="2" labelText="About us" labelIcon={Label}>
        <StyledTreeItem
          nodeId="8"
          labelText="Secretariat and Management"
          labelIcon={InfoIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about")}
        /> 
        <StyledTreeItem
          nodeId="9"
          labelText="Board Members"
          labelIcon={InfoIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about/board-members")}
        />
        <StyledTreeItem
          nodeId="10"
          labelText="Advisory council"
          labelIcon={InfoIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about/advisory-council")}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" labelText={"Programmes & Projects"} labelIcon={Label}>
        <StyledTreeItem nodeId="11" labelText={"Programmes & Projects"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="20"
            labelText="Governance and public accountability"
            labelIcon={AddTaskIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/participatory-local-governance-and-public-accountability-project")}
          />
          <StyledTreeItem
            nodeId="22"
            labelText="Local rights"
            labelIcon={AddTaskIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/local-rights")}
          />
          <StyledTreeItem
            nodeId="23"
            labelText="Women empowerment"
            labelIcon={AddTaskIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/women-economic-empowerment-project")}
          />

        </StyledTreeItem>
        <StyledTreeItem nodeId="12" labelText={"Education and Culture"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="24"
            labelText="Language and Culture"
            labelIcon={AddTaskIcon}
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/language-and-culture-project")}
          />
          <StyledTreeItem
            nodeId="25"
            labelText="Tonga online"
            labelIcon={AddTaskIcon}
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/tonga-online-project")}
          />
          <StyledTreeItem
            nodeId="26"
            labelText="Information creation access, and sharing"
            labelIcon={AddTaskIcon}
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/integrated-information-creation-access-and-sharing")}
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="13" labelText={"Livelihoods"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="27"
            labelText="Integrated acquaculture agriculture"
            labelIcon={AddTaskIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/integrated-aquaculture-agriculture-project")}
          />
          <StyledTreeItem
            nodeId="28"
            labelText="Protracted relief projects"
            labelIcon={AddTaskIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/protracted-relief-projects-binga-and-gokwe-north")}
          />
          <StyledTreeItem
            nodeId="29"
            labelText="Self help groups"
            labelIcon={AddTaskIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/self-help-groups")}
          />
        </StyledTreeItem>
        <StyledTreeItem
          nodeId="14"
          labelText="HIV/AIDS Programme"
          labelIcon={AddTaskIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/health-HIV-and-AIDS-programme")}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="Publications" labelIcon={Label}>
        <StyledTreeItem
          nodeId="15"
          labelText="Online news"
          labelIcon={ChromeReader}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/online-news")}
        />
        <StyledTreeItem
          nodeId="16"
          labelText="Newsletter"
          labelIcon={ChromeReader}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/newsletter")}
        />
        <StyledTreeItem
          nodeId="17"
          labelText="Archives"
          labelIcon={ChromeReader}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/previous-issues")}
        />
        <StyledTreeItem
          nodeId="18"
          labelText="Project evaluations"
          labelIcon={ChromeReader}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/project-evaluations")}
        />
        <StyledTreeItem
          nodeId="19"
          labelText="Other documents"
          labelIcon={ChromeReader}
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/other-documents")}
        />
      </StyledTreeItem>
      <StyledTreeItem 
        nodeId="5" 
        labelText={"Sponsors & Partners"} 
        labelIcon={StoreTwoToneIcon}
        onClick={() => actionItem("/basilwizi/partners-and-sponsors")}
      />
      <StyledTreeItem 
        nodeId="6" 
        labelText="Contact" 
        labelIcon={PermContactCalendar}
        onClick={() => actionItem("/basilwizi/contact")}
      />
      {
        isLoggedIn ? (
          <StyledTreeItem nodeId="7" labelText={user.email.slice(0,6)} labelIcon={Label}>
            <StyledTreeItem
              nodeId="20"
              labelText="Profile"
              labelIcon={SupervisorAccountIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              onClick={() => actionItem("/basilwizi/profile")}
            /> 
            <StyledTreeItem
              nodeId="21"
              labelText="Logout"
              labelIcon={SupervisorAccountIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
              onClick={logoutUser}
            />
          </StyledTreeItem>
        ) : (
          <StyledTreeItem 
            nodeId="7" 
            labelText="Login" 
            labelIcon={ExitToAppIcon}
            onClick={() => actionItem("/basilwizi/accounts")}
          />
        )
      }
    </TreeView>
  );
}

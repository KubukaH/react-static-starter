import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

// MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Home from '@mui/icons-material/Home';
import ChromeReader from '@mui/icons-material/ChromeReaderModeTwoTone';
import PermContactCalendar from '@mui/icons-material/PermContactCalendarTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import AddTaskIcon from '@mui/icons-material/AddTask';

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
          nodeId="7"
          labelText="Secretariat and Management"
          labelIcon={InfoIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about/secretariat-and-management")}
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Board Members"
          labelIcon={InfoIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about/board-members")}
        />
        <StyledTreeItem
          nodeId="9"
          labelText="Advisory council"
          labelIcon={InfoIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={() => actionItem("/basilwizi/about/advisory-council")}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" labelText={"Programmes & Projects"} labelIcon={Label}>
        <StyledTreeItem nodeId="10" labelText={"Programmes & Projects"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="20"
            labelText="Governance and public accountability"
            labelIcon={AddTaskIcon}
            labelInfo="90"
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/governance-and-accountability")}
          />
          <StyledTreeItem
            nodeId="21"
            labelText="Local rights"
            labelIcon={AddTaskIcon}
            labelInfo="90"
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/local-rights")}
          />
          <StyledTreeItem
            nodeId="22"
            labelText="Women empowerment"
            labelIcon={AddTaskIcon}
            labelInfo="90"
            color="#1a73e8"
            bgColor="#e8f0fe"
            onClick={() => actionItem("/basilwizi/women-empowerment")}
          />

        </StyledTreeItem>
        <StyledTreeItem nodeId="11" labelText={"Education and Culture"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="23"
            labelText="Language and Culture"
            labelIcon={AddTaskIcon}
            labelInfo="2,294"
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/language-and-culture")}
          />
          <StyledTreeItem
            nodeId="24"
            labelText="Tonga online"
            labelIcon={AddTaskIcon}
            labelInfo="2,294"
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/tonga-online")}
          />
          <StyledTreeItem
            nodeId="25"
            labelText="Information creation access, and sharing"
            labelIcon={AddTaskIcon}
            labelInfo="2,294"
            color="#e3742f"
            bgColor="#fcefe3"
            onClick={() => actionItem("/basilwizi/information-creation-access-and-sharing")}
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="12" labelText={"Livelihoods"} labelIcon={Label}>
          <StyledTreeItem
            nodeId="26"
            labelText="Integrated acquaculture agriculture"
            labelIcon={AddTaskIcon}
            labelInfo="3,566"
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/integrated-acquaculture-agriculture")}
          />
          <StyledTreeItem
            nodeId="27"
            labelText="Protracted relief projects"
            labelIcon={AddTaskIcon}
            labelInfo="3,566"
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/protracted-relief-projects")}
          />
          <StyledTreeItem
            nodeId="28"
            labelText="Self help groups"
            labelIcon={AddTaskIcon}
            labelInfo="3,566"
            color="#a250f5"
            bgColor="#f3e8fd"
            onClick={() => actionItem("/basilwizi/self-help-groups")}
          />
        </StyledTreeItem>
        <StyledTreeItem
          nodeId="13"
          labelText="HIV/AIDS Programme"
          labelIcon={AddTaskIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/hiv-aids-programme")}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="Publications" labelIcon={Label}>
        <StyledTreeItem
          nodeId="15"
          labelText="Online news"
          labelIcon={ChromeReader}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/online-news")}
        />
        <StyledTreeItem
          nodeId="16"
          labelText="Newsletter"
          labelIcon={ChromeReader}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/newsletter")}
        />
        <StyledTreeItem
          nodeId="17"
          labelText="Archives"
          labelIcon={ChromeReader}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/archives")}
        />
        <StyledTreeItem
          nodeId="18"
          labelText="Project evaluations"
          labelIcon={ChromeReader}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          onClick={() => actionItem("/basilwizi/project-evaluations")}
        />
        <StyledTreeItem
          nodeId="19"
          labelText="Other documents"
          labelIcon={ChromeReader}
          labelInfo="733"
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
    </TreeView>
  );
}
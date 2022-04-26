import * as React from 'react';
import Button from '@mui/lab/LoadingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';

export default function FormDialog({
  openDialog, handleDialogClose, actionTitle, dialogContent, handleAction, isLoading
}) {
  return (
    <Dialog 
      open={openDialog} 
      onClose={handleDialogClose}
      id={"open-action-dialog"}
    >
      <DialogTitle>
        {actionTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="success"
          onClick={handleDialogClose}
          size="small"
        >Cancel</Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handleAction}
          type={"button"}
          loadingPosition="start"
          startIcon={<DeleteIcon color="warning" />}
          loading={isLoading}
          size="small"
        >Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

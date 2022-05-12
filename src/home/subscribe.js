import * as React from 'react';
import { 
  AlertDialogOverlay, 
  AlertDialogLabel, 
  AlertDialogContent ,
  AlertDialogDescription
} from "@reach/alert-dialog";
import { Formik, Form, useField } from "formik";
import Box from "@mui/material/Box";
import {
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import TermsAndConditions from "../settings/terms";
import { alertService, mailingService } from "../_services";

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      id={props.id}
      variant="standard"
      fullWidth
      inputProps={{
        ...field,
        ...props,
      }}
      sx={{ m: 1 }}
    />
  );
};

const MyCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <FormControlLabel
      control={
        <Checkbox color="primary" {...field} {...props} />
      }
      label={
        label
      }
    />
  );
}

const Subscribe = () => {
  const [open, setOpen] = React.useState(false);
  const cancelRef = React.useRef();

  const handleOpen =  () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <LoadingButton
      type='button'
      variant='outlined'
      onClick={handleOpen}
      color='success'
      sx={{
        boxShadow: "16px"
      }}
    >
      Subscribe for updates
    </LoadingButton>
    {
      open && (
        <AlertDialogOverlay
          leastDestructiveRef={cancelRef}
          onDismiss={handleClose}
        >
          <AlertDialogContent style={{ background: "#f0f0f0" }}>
            <AlertDialogLabel style={{ fontSize: 32 }} >
              Subscribe to Basilwizi Updates
            </AlertDialogLabel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                my: 5,
                p: 2
              }}
            >
              <Formik
                initialValues={{ names: "", email: "", termsOfUse: false }}
                onSubmit={(fields, { setSubmitting}) => {
                  alertService.clear();
                  setSubmitting(false);
                  mailingService.save(fields).then(() => {
                    alertService.success("Details have been saved. Thank you for subscribing to the Newsletter.");
                    setSubmitting(false);
                    handleClose();
                  }).catch((error) => {
                    alertService.error(error);
                    setSubmitting(false);
                  });
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <AlertDialogDescription>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: ["column", "row"],
                          justifyContent: ["center","space-around"]
                        }}
                      >
                        <MyTextField
                          label="Your Names"
                          id="your-names"
                          name="names"
                          type="text"
                        />
                        <MyTextField
                          label="Your Email"
                          id="your-email"
                          name="email"
                          type="email"
                        />
                      </Box>
                      <Box p={3}>
                        <MyCheckBox
                          label={
                            <span>
                              accept the terms of use as found in the following link: <TermsAndConditions />
                            </span>
                          }
                          name="termsOfUse"
                        />
                      </Box>
                    </AlertDialogDescription>
                    <Box 
                      p={1}
                      sx={{
                        display: 'flex',
                        flexDirection: ['column','row'],
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        width: 1,
                        mt: 8
                      }}
                    >
                      <LoadingButton
                        ref={cancelRef}
                        onClick={handleClose}
                        color='warning'
                        type='button'
                        variant='outlined'
                      >
                        Cancel
                      </LoadingButton>
                      <LoadingButton
                        color='success'
                        type={"submit"}
                        loadingPosition="start"
                        startIcon={<SendIcon color="success" />}
                        variant="outlined"
                        loading={isSubmitting}
                      >
                        subscribe me
                      </LoadingButton>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </AlertDialogContent>
        </AlertDialogOverlay>
      )
    }
    </>
  );
};

export default Subscribe;

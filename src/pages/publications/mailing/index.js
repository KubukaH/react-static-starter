import * as React from "react";
import { Formik, Form, useField } from "formik";

import Box from "@mui/material/Box";
import {
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import TermsAndConditions from "../../../settings/terms";
import { alertService, mailingService } from "../../../_services";

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

const MailingOrder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: [0.95, 0.8],
        alignItems: "center",
        border: "0.25px dotted #a0a465",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        m: "64px auto"
      }}
    >
      <Box p={3} sx={{ textAlign: 'center' }} >
        Leave your details so we can send you a soft copy of the Twaabane Times as soon as it is published. 
      </Box>
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
            }).catch((error) => {
              alertService.error(error);
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                      accept the terms of use as found in the following link: {' '}<TermsAndConditions />
                    </span>
                  }
                  name="termsOfUse"
                />
              </Box>
              <Box p={1}>
                <LoadingButton
                  color='success'
                  type={"submit"}
                  loadingPosition="start"
                  startIcon={<SendIcon color="success" />}
                  variant="outlined"
                  loading={isSubmitting}
                >
                  place order
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MailingOrder;
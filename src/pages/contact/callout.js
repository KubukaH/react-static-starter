import * as React from "react";
import { Formik, Form, useField } from "formik";

// MUI Components
import Box from "@mui/material/Box";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import {
  TextField,
} from "@mui/material";

// Local Imports
import { contactusService } from "../../_services/contactus.service";
import { alertService } from "../../_services/alert.service";
import MenuSDial from "../../components/dial";

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      id={props.id}
      fullWidth
      inputProps={{
        ...field,
        ...props,
      }}
      sx={{ m: 1 }}
      size="small"
    />
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextareaAutosize
      id={props.id}
      aria-label="Message the Admins"
      maxRows={10}
      style={{ width: "100%", height: 120 }}
      placeholder="Type your message ..."
      {...field}
      {...props}
    />
  );
};

const Callout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  return (
    <>
    <MenuSDial
      actions={[
        { icon: <SendIcon onClick={handleClick} color='success' />, name: 'Leave message' },
      ]}
    />
    <Popper open={open} anchorEl={anchorEl} placement="auto-start" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper sx={{ width: ["320px", "640px"] }}>
            <Box className="callout" >
              <Box className='callout-header' >Reach to us</Box>
              <span className="closebtn" onClick={handleClick}>x</span>
              <Box className='callout-container' >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Formik
                    initialValues={{ names: "", email: "", message: "" }}
                    onSubmit={(fields, { setSubmitting}) => {
                      alertService.clear();
                      setSubmitting(true);
                      contactusService.sendmessage(fields).then(() => {
                        alertService.success("Message sent to Admins!");
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
                            flexDirection: ["column","row"],
                            justifyContent: "space-around"
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
                        <Box p={1}>
                          <MyTextarea
                            name="message"
                            id="messages-send"
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
                            size="small"
                          >
                            Send Message
                          </LoadingButton>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
    </>
  );
};

export default Callout;
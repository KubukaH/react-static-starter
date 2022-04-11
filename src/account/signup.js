import * as React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import {
  Checkbox,
  FormControlLabel,
 } from '@mui/material';

// Local imports
import { alertService } from "../_services";
import AccountIndex from ".";
import { useCTX } from "../components/context";
import { auth } from "../lambda/auth";

const MyTextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      variant="outlined"
      type={props.type}
      label={label}
      sx={{
        width: {
          xs: 1,
          sm: 'auto',
        },
        m: (theme) => theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
          mr: 0.5,
        },
        '& .MuiInput-underline:before': {
          borderBottom: 1,
          borderColor: 'divider',
        },
      }}
      error={meta.touched && Boolean(meta.error)}
      {...field}
      {...props}
    />
  );
};

const MyCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "", 
  acceptTerms: false
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  acceptTerms: Yup.bool()
    .oneOf([true], 'Accept Terms & Conditions is required')
});

const SignUp = () => {
  const ctx = useCTX();
  const navigate = useNavigate();

  return (
    <AccountIndex
      rightText="Sign Up New User"
      leftText="Sign Up"
      leftLinks={
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <Box
            component={Link}
            to="/basilwizi/accounts"
            sx={{
              color: "text.primary",
              fontSize: 11,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "0.5px dotted yellow",
                color: "purple"
              }
            }}
          >
            Sign In
          </Box>
          <Box
            component={Link}
            to="forgot-password"
            sx={{
              color: "text.primary",
              fontSize: 11,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "0.5px dotted yellow",
                color: "purple"
              }
            }}
          >
            Forgot Password?
          </Box>
        </Box>
      }
      rightComponent={
        <Box p={3} >
          <Box
            sx={{ 
              color: "text.base",
              width: "90%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              m: "auto"
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(fields, { setSubmitting }) => {
                alertService.clear();
                auth
                  .signup(fields)
                  .then((response) => {
                    console.log('Confirmation email sent', response);
                    alertService.success("COnfirmation sent");
                    setSubmitting(false);
                    navigate("/basilwizi/accounts");
                  })
                  .catch((error) => {
                    console.log("It's an error", error);
                    setSubmitting(false);
                  });
              }}
            >
              {
                ({ isSubmitting }) => (
                  <Form>
                    <Box p={1}>
                      <MyTextField
                        name="firstName"
                        label="First Name"
                        type="text"
                      />
                    </Box>
                      <Box p={1}>
                        <MyTextField
                          name="lastName"
                          label="Last Name"
                          type="text"
                        />
                      </Box>
                    <Box p={1}>
                      <MyTextField
                        name="email"
                        label="Email"
                        type="email"
                      />
                    </Box>
                    <Box p={1}>
                      <MyTextField
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Box>
                    <Box p={1}>
                      <MyTextField
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                      />
                    </Box>
                    <Box p={1}>
                      <MyCheckBox
                        name="acceptTerms"
                        label="Accept terms and conditions"
                        type="checkbox"
                      />
                    </Box>
                    <Box
                      p={3}
                    >
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        loading={isSubmitting}
                      >
                        Sign In
                      </Button>
                    </Box>
                  </Form>
                )
              }
            </Formik>
          </Box>
        </Box>
      }
    />
  );
}

export default SignUp;

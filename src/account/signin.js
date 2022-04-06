import * as React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";

// Local imports
import { alertService } from "../_services";
import AccountIndex from ".";
import { useCTX } from "../components/context";
import useLoading from "../components/extras/loading";

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

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!").email("Must be email!"),
  password: Yup.string().required("Required!")
});

const SignIn = () => {
  const ctx = useCTX();
  const { loginUser } = ctx;
  const navigate = useNavigate();
  const [isLoading, load] = useLoading();

  return (
    <AccountIndex
      rightText="Sign In"
      leftText="Sign In"
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
            to="signup"
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
            Sign Up
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
              flexDirection: "column",
              m: "auto"
            }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={({ email, password }, { setSubmitting }) => {
                alertService.clear();
                load(loginUser(email, password))
                  .then((user) => {
                    alertService.success("Welcome!", { keepAfterRouteChange: true });
                    setSubmitting(false);
                    navigate("/", { replace: true });
                  })
                  .catch((error) => {
                    setSubmitting(false);
                    alertService.error(error);
                  });
              }}
            >
              {
                ({ isSubmitting }) => (
                  <Form>
                    <Box p={3}>
                      <MyTextField
                        name="email"
                        label="Email"
                        type="email"
                      />
                    </Box>
                    <Box p={3}>
                      <MyTextField
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Box>
                    <Box
                      p={3}
                    >
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        loading={isSubmitting || isLoading}
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

export default SignIn;

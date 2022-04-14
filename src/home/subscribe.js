import * as React from "react";
import { useField, Form, Formik } from "formik";
import * as Yup from "yup";

// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Local imports
import { alertService, subscribeService } from "../_services";

const MyTextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      variant="outlined"
      placeholder="Email"
      type="email"
      InputProps={{
        endAdornment: (
          <Button
            type="submit"
            color="primary"
          >
            send
          </Button>
        ),
      }}
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
}

const initialValues = {
  email: ""
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!").email("Must be email!")
});

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Subscribe = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ email }, { setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "Subscriber", email }),
          mode: "no-cors"
        })
          .then(() => {
            alertService.success("Thank you for subscribing.");
            setSubmitting(false);
          })
          .catch((error) => {
            alertService.error(error);
            setSubmitting(false);
          });

      }}
    >
      <Form>
        <Box
          sx={{
            display: "flex",
            width: "100%"
          }}
        >
          <MyTextField name="email"/>
        </Box>
      </Form>
    </Formik>
  );
}

export default Subscribe;
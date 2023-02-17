import * as React from 'react';
import { useTransition, animated } from '@react-spring/web'
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from "@mui/lab/LoadingButton";

import useLoading from '../../components/extras/loading';
import { alertService } from '../../_services';
import { newItem } from '../../_helpers';
import RichTextEditor from './rich-text';

const initialValues = {
  author: '',
  article_title: '',
  category: ''
};

const validationSchema = Yup.object().shape({
  author: Yup.string().required("Please include Author!"),
  article_title: Yup.string().required("There should be a title."),
  category: Yup.string().required("required"),
});

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      type={props.type}
      id={props.id}
      variant="outlined"
      size="small"
      fullWidth
      sx={{
        m: (theme) => theme.spacing(0.1, 0.5, 0.1),
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

const Writer = ({ initialValue }) => {
  const [dirty, setDirty] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const transitions = useTransition(showDialog, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  });
  const [isLoading, load] = useLoading();
  const [bContent, setBContent] = React.useState(initialValue ?? '');
  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const handleClose = () => {
    setShowDialog(false);
  };

  const closeModal = () => {
    dirty 
      ? 
        confirm(
          "The editor has some unsaved changes. Are you sure you want to exit without saving the changes?"
        ) && handleClose()
      :
        handleClose();
  };

  React.useEffect(() => setDirty(false), [initialValue]);
  React.useEffect(() => setBContent(initialValue ?? ''), [initialValue]);

  return (
    <>
    <Box
      component="a"
      href="#"
      onClick={() => setShowDialog(true)}
    >
      Write article
    </Box>
    {transitions(
      (styles, item) =>
        item && (
          <AnimatedDialogOverlay style={{ opacity: styles.opacity, width: "100%" }}>
            <AnimatedDialogContent
              aria-labelledby="dialog-title"
              style={{
                transform: styles.y.to(
                  (value) => `translate3d(0px, ${value}px, 0px)`
                ),
                border: "4px solid hsla(0, 0%, 0%, 0.5)",
                borderRadius: 10,
              }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(fields, {setSubmitting}) => {
                  alertService.clear();
                  const data = {...fields, article_content: bContent};
                  load(newItem('News', data)).then(() => {
                    alertService.success('Blog created!');
                    closeModal();
                  }).catch((error) => {
                    alertService.error(error);
                  });
                }}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form>
                      <Box
                        sx={{
                          width: "100%",
                          height: .075,
                          m: "auto",
                          p: 3
                        }}
                      >
                        <MyTextField
                          name='article_title'
                          type='text'
                          label='Title of the Article'
                          id='title-of-article'
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: .075,
                          m: "auto",
                          display: 'flex',
                          flexDirection: 'row',
                          p: 3
                        }}
                      >
                        <MyTextField
                          name='author'
                          type='text'
                          label='Name of author'
                          id='name-of-author'
                        />
                        <MyTextField
                          name='category'
                          type='text'
                          label='Article category'
                          id='category'
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: 1,
                          m: "auto",
                        }}
                      >
                        <RichTextEditor />
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: .05,
                          borderTop: 0.1,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          p: 3
                        }}
                      >
                        <Button
                          type='button'
                          variant='outlined'
                          color='warning'
                          size='small'
                          onClick={closeModal}
                        >
                          Cancel
                        </Button>
                        <Button
                          type='submit'
                          variant='outlined'
                          color='primary'
                          loading={isLoading}
                          size='small'
                        >
                          submit
                        </Button>
                      </Box>
                    </Form>
                  )
                }}
              </Formik>
            </AnimatedDialogContent>
          </AnimatedDialogOverlay>
        )
    )}
    </>
  );
};

export default Writer;

import * as React from 'react';
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import { Dialog } from "@reach/dialog";

import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from "@mui/lab/LoadingButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialValues = {
  author: '',
  article_title: '',
  article_content: '',
  category: ''
};

const validationSchema = Yup.object().shape({
  author: Yup.string().required("Please include Author!"),
  article_title: Yup.string().required("There should be a title."),
  article_content: Yup.string()
    .min(3, "A minmum of 10 characters required")
    .max(3000, "Message should not be longer than this!")
    .required("Write something!"),
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
  const [open, setOpen] = React.useState(false);

  const editorRef = React.useRef(null);

  // const isAddMode = !postId;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  return (
    <>
    <Box
      component="a"
      href="#"
      onClick={handleClickOpen}
    >
      Write article
    </Box>
    {
      open && (
        <Dialog
          onDismiss={closeModal}
          aria-labelledby="the writer dialog"
          style={{
            width: "90%",
            height: "85%",
            padding: "0px !important",
            marginInline: "auto",
          }}
          transitioncomponent={Transition}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit
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
                      height: .8,
                      m: "auto",
                      overflowY: "scroll"
                    }}
                  >
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue="<p>This is the initial content of the editor.</p>"
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
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
                      loading={isSubmitting}
                      size='small'
                    >
                      submit
                    </Button>
                  </Box>
                </Form>
              )
            }}
          </Formik>
        </Dialog>
      )
    }
    </>
  );
};

export default Writer;
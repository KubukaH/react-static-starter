import * as React from 'react';
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { Dialog } from "@reach/dialog";
import { env } from 'process';
import isHotkey from 'is-hotkey';
import { Editable, withReact, useSlate, Slate } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
} from 'slate';
import { withHistory } from 'slate-history';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from "@mui/lab/LoadingButton";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';

import useLoading from '../../components/extras/loading';
import { alertService } from '../../_services';
import { newItem } from '../../_helpers';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

const Writer = ({ initialValue }) => {
  const [dirty, setDirty] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isLoading, load] = useLoading();
  const [bContent, setBContent] = React.useState(initialValue ?? '');

  const renderElement = React.useCallback(props => <Element {...props} />, []);
  const renderLeaf = React.useCallback(props => <Leaf {...props} />, []);
  const editor = React.useMemo(() => withHistory(withReact(createEditor())), []);

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
  React.useEffect(() => setBContent(initialValue ?? ''), [initialValue]);

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
                      height: .8,
                      m: "auto",
                      overflowY: "scroll"
                    }}
                  >
                    <Slate 
                      editor={editor} 
                      value={initialEValue}
                      onChange={(value) => {
                        const isAstChange = editor.operations.some(
                          op => 'set_selection' !== op.type
                        )
                        if (isAstChange) {
                          // Save the value to Local Storage.
                          const content = JSON.stringify(value);
                          setBContent(content);
                        }
                      }}
                    >
                      <Toolbar>
                        <MarkButton format="bold" icon={<FormatBoldIcon/>} />
                        <MarkButton format="italic" icon={<FormatItalicIcon/>} />
                        <MarkButton format="underline" icon={<FormatUnderlinedIcon/>} />
                        <MarkButton format="code" icon={<CodeIcon/>} />
                        <BlockButton format="heading-one" icon={<LooksOneIcon/>} />
                        <BlockButton format="heading-two" icon={<LooksTwoIcon/>} />
                        <BlockButton format="block-quote" icon={<FormatQuoteIcon/>} />
                        <BlockButton format="numbered-list" icon={<FormatListNumberedIcon/>} />
                        <BlockButton format="bulleted-list" icon={<FormatListBulletedIcon/>} />
                        <BlockButton format="left" icon={<FormatAlignLeftIcon/>} />
                        <BlockButton format="center" icon={<FormatAlignCenterIcon/>} />
                        <BlockButton format="right" icon={<FormatAlignRightIcon/>} />
                        <BlockButton format="justify" icon={<FormatAlignJustifyIcon/>} />
                      </Toolbar>
                      <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Enter some rich text…"
                        spellCheck
                        autoFocus
                        onKeyDown={event => {
                          for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event)) {
                              event.preventDefault()
                              const mark = HOTKEYS[hotkey]
                              toggleMark(editor, mark)
                            }
                          }
                        }}
                      />
                    </Slate>
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
        </Dialog>
      )
    }
    </>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialEValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

export default Writer;
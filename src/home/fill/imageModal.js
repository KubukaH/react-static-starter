import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getImageById } from "../../settings/images";
import { Dialog } from "@reach/dialog";

// MUI components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const ImageModal = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let image = getImageById(id);
  let buttonRef = React.useRef(null);

  function onDismiss() {
    navigate(-1);
  }

  if (!image) return null;

  return (
    <Box
      component={Dialog}
      aria-labelledby="label"
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
      sx={{
        width: "400px",
        height: "400px",
        p: "0px !important",
        marginTop: "128px !important"
      }}
    >
      <IconButton
        title="Thank you"
        aria-label="Thank you"
        size="small"
        ref={buttonRef}
        onClick={onDismiss}
        sx={{
          mt: ["-48px"],
          mr: ["-24px"],
          float: "right",
          color: "red",
          border: "1px dotted #a0a465",
          boxShadow: 4,
          "&:hover, &:focus": {
            border: "1px dotted red",
            color: "red",
            bgcolor: "#fff"
          }
        }}
      >
        <ClearIcon size="small" />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          component="h4"
          id="label"
          sx={{
            width: "100%",
            p: 3,
            m: "auto",
            bgcolor: "background.basilwiziColor",
            color: "#fff"
          }}
        >
          {image.title}
        </Box>
        <Box
          component={"img"}
          sx={{
            width: "100%",
            height: "100%",
          }}
          src={image.img}
          alt=""
        />
      </Box>
    </Box>
  );
}

export default ImageModal;
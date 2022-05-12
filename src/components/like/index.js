import * as React from "react";
import { Formik, Form } from "formik";
import { useParams, useNavigate } from "react-router-dom";

// MUI Components
import Box from "@mui/material/Box";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import { alertService, likeService } from "../../_services";
import useLoading from "../extras/loading";
import { useCTX } from "../context";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Like = ({ open, handleClick, anchorEl, close }) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [isLoading, load] = useLoading();
  const [likeThis, setLikeThis] = React.useState({});

  const { likes } = useCTX();
  const { pid } = useParams();
  const searchParams = new URLSearchParams(pid);
  const uaid = searchParams.get('uaid');

  React.useEffect(() => {
    likeService.getLikedBy(uaid).then(ls => setLikeThis(ls));
  },[likeThis]);

  const grid = React.useCallback(() => {
    if (likeThis.liked_by === 'Mapenzi Mudimba') {
      return (
        <Box p={1}>
          <Rating
            name="hover-feedback"
            value={5}
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <span style={{ color: "black", fontSize: "10px" }} >
            {likeThis.liked_by}
          </span>
        </Box>
      )
    }
    return (
      <>
      <Box p={1}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      {
        likes.map((lk) => (
          <Box key={lk.id} sx={{color: '#000', fontSize: 8}}>
            {lk.liked_by}{" "}{lk.like_to}{" On: "}{lk.created}
          </Box>
        ))
      }
      <Box p={1}>
        <LoadingButton
          color='success'
          type={"submit"}
          loadingPosition="start"
          startIcon={<SendIcon color="success" />}
          variant="outlined"
          loading={isLoading}
          size="small"
        >
          Submit Rate
        </LoadingButton>
      </Box>
      </>
    )
  }, [likes, likeThis, setValue, setHover, labels, hover, value, isLoading]);

  return (
    <Popper open={open} anchorEl={anchorEl} placement="top-end" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper sx={{ width: ["200px"] }}>
            <Box>
              <Box sx={{
                py: '8px',
                px: '10px',
                bgcolor: '#8b8f58d8',
                fontSize: 24,
                color: 'ghostwhite'
              }} >Rate this article</Box>
              <IconButton
                title="Good Bye"
                aria-label="Thank you"
                size="small"
                onClick={handleClick}
                sx={{
                  mt: ["-72px"],
                  mr: ["-24px"],
                  float: "right",
                  color: "red",
                  border: "1px dotted #a0a465",
                  "&:hover, &:focus": {
                    border: "1px dotted red",
                    color: "purple"
                  }
                }}
              >
                <ClearIcon size="small" />
              </IconButton>
              <Box sx={{
                p: 2,
                bgcolor: '#ccc',
                color: '#000'
              }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Formik
                    initialValues={{
                      liked: false,
                      liked_by: ''
                    }}
                    onSubmit={() => {
                      alertService.clear();
                      const data = { liked: true, liked_by: 'Mapenzi Mudimba' };
                      load(likeService.create(uaid, data)).then(() => {
                        alertService.info("Thank you for your feedback!");
                        close();
                      }).catch((error) => {
                        alertService.error(error);
                      });
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        {grid()}
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
  );
};

export default Like;

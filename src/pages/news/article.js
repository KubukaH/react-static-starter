import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import queryString from "query-string";

// MUI Components
import Box from "@mui/material/Box";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import MenuSDial from "../../components/dial";
import { fDate } from "../../settings/formatTime";
import Like from "../../components/like";
import { useCTX } from "../../components/context";
import { alertService, newsService } from "../../_services";
import FormDialog from "../../components/modal";
import useLoading from "../../components/extras/loading";

const NewsArticle = () => {
  const [anchorLike, setAnchorLike] = React.useState(null);
  const [openLike, setOpenLike] = React.useState(false);
  const [article, setArticle] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isLoading, load] = useLoading();
  const [openBd, setOpenBd] = React.useState(false);

  const { likes, isLoggedIn, user } = useCTX();
  const { uaid } = queryString.parse(location.search);

  React.useEffect(() => {
    newsService.getById(uaid).then(x => setArticle(x));
  },[article]);

  const navigate = useNavigate();

  const handleDialogOpen = () => {
    setOpenDialog(true);
  }

  const handleDialogClose = () => {
    setOpenDialog(false);
  }
  
  const handleClickLike = (event) => {
    setAnchorLike(event.currentTarget);
    setOpenLike((prev) => !prev);
  };

  const handleCloseBd = () => {
    setOpenBd(false);
  };
  
  const handleToggleBd = () => {
    alertService.clear();
    load(newsService.getAll()).then(() => {
      alertService.warn("You don't have the rights to perform this action.");
    }).catch((error) => {
      alertService.warn(error);
    });
  };

  const handleLikeClose = () => setOpenLike(false);

  const handleDelete = (id) => {
    load(newsService.delete(id))
    .then(() => {
      alertService.info('Article was removed from database', {keepAfterRouteChange: true});
      navigate(-1);
    }).catch((error) => {
      alertService.error(error);
    });
  }

  const grid = React.useCallback(() => {
    if (article.id !== null) { return (
      <>
      <Box
        sx={{
          display: "block",
          p: 0,
          m: 0,
          borderBottom: "1px dashed #a0a465"
        }}
      >
        <Box
          sx={{
            color: "text.primary",
            fontWeight: 500,
            fontSize: 18,
            pt: 4,
            px: 4
          }}
        >
          {article.article_title}
        </Box>
        <Box
          sx={{
            color: "text.primary",
            fontWeight: 200,
            fontSize: 11,
            px: 4,
            pb: 4
          }}
        >
          {
            `By: ${article.author} | 
            Date: ${fDate(moment(article.created))} | 
            Likes: ${likes.length}`
          }
        </Box>
      </Box>
      <Box
        sx={{
          color: "text.primary",
          fontSize: 14,
          fontWeight: 100,
          p: [1, 4]
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: article.article_content }} />
      </Box>
      </>
    ) };
  },[article, likes]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: ["100%","95%"],
        height: "96%",
        m: "16px auto",
        border: "1px dashed #a0a465"
      }}
    >
      {grid()}
      <MenuSDial
        actions={isLoggedIn ? [
          { icon: <FileCopyIcon />, name: 'Copy' },
          { 
            icon: <FavoriteIcon 
              color="secondary" 
              onClick={handleClickLike} 
            />, name: 'Like' 
          },
          { 
            icon: <DeleteIcon 
              color="warning" 
              onClick={user.role === 'editor' ? handleDialogOpen : handleToggleBd} 
            />, name: 'Delete' 
          },
          { icon: <EditIcon color="basilwiziColor" />, name: 'Edit' },
        ] : [
          { 
            icon: <FileCopyIcon 
            onClick={handleToggleBd}  
            />, name: 'Copy' 
          },
          { icon: <FavoriteIcon color="secondary" onClick={handleClickLike} />, name: 'Like' },
        ]}
      />
      <Like
        open={openLike}
        handleClick={handleClickLike}
        anchorEl={anchorLike}
        aid={article.id}
        close={handleLikeClose}
      />
      <FormDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        actionTitle={
          <span style={{ fontSize: 20 }}>
            Delete {" "+article.article_title}
          </span>
        }
        dialogContent={
          <span>
            You are about to delete this article. Are you sure? If not certain refer to your immediate supervisor or the Site Admin.<br/><br/>
            This action is not reversible.
          </span>
        }
        handleAction={() => handleDelete(article.id)}
        isLoading={isLoading}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  );
};

export default NewsArticle;

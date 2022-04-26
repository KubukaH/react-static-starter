import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import {alpha,  useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import TablePagination from '@mui/material/TablePagination';

// LOCAL Imports
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";
import { useCTX } from "../../components/context";

const perPage = 6;
const NewsHeadlines = () => {
  const [page, setPage] = React.useState(0);
  const ctx = useCTX();
  const { articles, requestSearch, searchText } = ctx;

  const theme = useTheme();

  const handleChangePage = React.useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const postGrid = React.useCallback(() => {
    if (articles.length > 0) {
      return articles
        .slice(page * perPage, page * perPage + perPage)
        .map((head) => {
        return (
          <Box
            key={head.id}
            sx={{
              width: 1,
              height: 256,
              boxShadow: 3,
              border: 0,
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              bgcolor: alpha(theme.palette.background.basilwiziColor, .15),
              overflow: "hidden",
              position: "relative"
            }}
          >
            <Box
              sx={{
                color: "text.secondary",
                fontSize: 16,
                fontWeight: "bold",
                width: "100%",
                bgcolor: "background.basilwiziColor",
                p: 2,
                maxHeight: "20%",
                overflow: "hidden"
              }}
            >
              {head.article_title}
            </Box>
            <Box
              sx={{
                color: "text.secondary",
                fontSize: 13,
                fontWeight: "medium",
                p: 2,
                overflow: "hidden",
                height: "70%",
                textAlign: "justify"
              }}
            >
              <span dangerouslySetInnerHTML={{__html:head.article_content.slice(0,256)}} />
            </Box>
            <Box
              component={Link}
              to={`${head.article_title.split(' ').join('-').toLowerCase()}?uaid=${head.id}`}
              sx={{
                color: "text.secondary",
                fontSize: 13,
                fontWeight: "bold",
                p: 5,
                height: "10%"
              }}
            >
              Read more
            </Box>
          </Box>
        )
      })
    }
    return (
      <Box
        sx={{
          width: [256, 512],
          height: 96,
          boxShadow: 5,
          borderBottomLeftRadius: "1024px",
          borderBottomRightRadius: "1024px",
          m: "16px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: alpha(theme.palette.background.basilwiziColor, .15),
          overflow: "hidden",
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "row", 
            width: "100%",
            justifyContent: "center",
            bgcolor: "background.basilwiziColor",
            height: .3
          }}
        >
          <Box
            sx={{
              color: "text.secondary",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Empty results
          </Box>
          <IconButton
            title="Clear"
            aria-label="Clear"
            size="small"
            sx={{ 
              visibility: searchText ? 'visible' : 'hidden',
            }}
            onClick={() => requestSearch("")}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          sx={{
            color: "text.secondary",
            fontSize: 16,
            fontWeight: "medium",
            p: 2,
            overflow: "hidden"
          }}
        >
          The search yielded no results.
        </Box>
      </Box>
    )
  }, [articles, requestSearch, searchText]);

  return (
    <>
    <SearchBox />
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "grid",
        gridTemplateColumns: ['repeat(1, 1fr)','repeat(3, 1fr)'],
        columnGap: 2.5,
        rowGap: 2.5,
        my: 4,
        mx: 2
      }}
    >
      {postGrid()}
    </Box>
    {articles.length > perPage && (
      <TablePagination
        component="div"
        count={articles.length}
        rowsPerPage={perPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        labelRowsPerPage='Pages'
        rowsPerPageOptions={[6, 18, 36, { label: 'All', value: -1 }]}
      />
    )}
    </>
  );
}

export default NewsHeadlines;
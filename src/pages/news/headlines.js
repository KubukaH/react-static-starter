import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import {alpha,  useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

// LOCAL Imports
import { newsArchives } from "../../settings/archives/newsArchive";
import { getImageById } from "../../settings/images";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";

// RegExp
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const rowsPerPage = 12;

const NewsHeadlines = () => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState(newsArchives);
  const [searchText, setSearchText] = React.useState('');

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = newsArchives.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  const handleChangePage = React.useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const postGrid = React.useCallback(() => {
    if (rows.length > 0) {
      return rows.map((head) => {
        const image = getImageById(head.attribute);

        return (
          <Box
            key={head.title}
            sx={{
              width: ["100%", 192, 256],
              height: 256,
              boxShadow: 3,
              border: 0,
              borderRadius: 0,
              m: 2,
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
              {head.title}
            </Box>
            <Box
              sx={{
                color: "text.secondary",
                fontSize: 13,
                fontWeight: "medium",
                p: 2,
                overflow: "hidden",
                height: "70%"
              }}
            >
              {head.content}
            </Box>
            <Box
              component={Link}
              to={`/basilwizi/online-news/${head.attribute}`}
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
          width: ["100%", 192, 256],
          height: 256,
          boxShadow: 3,
          border: 0,
          borderRadius: 0,
          m: "16px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          bgcolor: alpha(theme.palette.background.basilwiziColor, .15),
          overflow: "hidden",
        }}
      >
        <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "row", 
          width: "100%",
          justifyContent: "space-between",
          bgcolor: "background.basilwiziColor",
          p: 2,
        }}
        >
          <Box
            sx={{
              color: "text.secondary",
              fontSize: 16,
              fontWeight: "bold",
              overflow: "hidden"
            }}
          >
            No results found
          </Box>
          <IconButton
            title="Clear"
            aria-label="Clear"
            size="small"
            style={{ visibility: searchText ? 'visible' : 'hidden' }}
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
            overflow: "hidden",
            height: "70%"
          }}
        >
          The search yielded no results. For better results try different search terms, or suggest an article to the editor. Click the 
          <code> X</code> button to clear this message.
        </Box>
      </Box>
    )
  } ,[rows, page]);

  return (
    <>
    <SearchBox
      searchText={searchText}
      requestSearch={(e) => requestSearch(e.target.value)}
      clearSearch={() => requestSearch("")}
    />
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {postGrid()}
    </Box>
    </>
  );
}

export default NewsHeadlines;
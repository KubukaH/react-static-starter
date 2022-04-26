import * as React from "react";

// MUI components
import Box from "@mui/material/Box";
import {alpha,  useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

// LOCAL Imports
import { Link } from "react-router-dom";
import { useCTX } from "../../components/context";
import SearchBox from "../news/searchBox";
import { newsArchives } from "../../settings/archives/newsArchive";

// RegExp
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

const perPage = 6;
const ArchiveHeadlines = () => {
  const [page, setPage] = React.useState(1);
  const [archives, setArchives] = React.useState(newsArchives);
  const [searchText, setSearchText] = React.useState('');
  const theme = useTheme();

  const archiveSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = newsArchives.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setArchives(filteredRows);
  };

  const handleChangePage = React.useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const postGrid = React.useCallback(() => {
    if (archives.length > 0) {
      return archives
        .slice(page * perPage, page * perPage + perPage)
        .map((head) => {
        return (
          <Box
            key={head.title}
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
              {head.title}
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
              {head.content}
            </Box>
            <Box
              component={Link}
              to={`/basilwizi/previous-archived/${head.attribute}`}
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
            onClick={() => archiveSearch("")}
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
  } ,[archives, archiveSearch, searchText]);

  return (
    <>
    <SearchBox />
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "grid",
        gridTemplateColumns: ['repeat(1, 3fr)','repeat(3, 1fr)'],
        columnGap: 2.5,
        rowGap: 2.5,
        my: 4,
      }}
    >
      {postGrid()}
    </Box>
    {archives.length > perPage && (
      <TablePagination
        component="div"
        count={archives.length}
        rowsPerPage={perPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onPageChange={handleChangePage}
        labelRowsPerPage="Items on page:"
        rowsPerPageOptions={[6, 18, 36, { label: 'All', value: -1 }]}
      />
    )}
    </>
  );
};

export default ArchiveHeadlines;
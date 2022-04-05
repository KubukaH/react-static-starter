import * as React from "react";
import { useParams } from "react-router-dom";

// MUI Components
import Box from "@mui/material/Box";
import { useCTX } from "../../components/context";

const NewsArticle = () => {
  const ctx = useCTX();
  const { article } = ctx;

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
          By Staff Reporter
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
        {article.article_content}
      </Box>
    </Box>
  );
}

export default NewsArticle;
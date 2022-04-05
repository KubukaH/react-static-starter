import * as React from "react";
import { useParams } from "react-router-dom";

// MUI Components
import Box from "@mui/material/Box";
import { getNewsArticleById } from "../../settings/archives/newsArchive";
import { getImageById } from "../../settings/images";

const ArchiveMain = () => {
  const { arcId } = useParams();
  const article = getNewsArticleById(arcId);
  const image = getImageById(article.attribute);

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
          {article.title}
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
        component="img"
        src={image.img}
        alt={image.title}
        sx={{
          width: "100%"
        }}
      />
      <Box
        sx={{
          color: "text.primary",
          fontSize: 14,
          fontWeight: 100,
          p: [1, 4]
        }}
      >
        {article.content}
      </Box>
    </Box>
  );
}

export default ArchiveMain;
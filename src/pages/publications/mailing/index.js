import * as React from "react";

import Box from "@mui/material/Box";
import TermsAndConditions from "../../../settings/terms";

const MailingOrder = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: [0.95, 0.8],
        alignItems: "center",
        border: "0.25px dotted #a0a465",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        m: "16px auto"
      }}
    >
      <Box p={3}>
        Leave your details so we can send you a soft copy of the Twaabane Times as soon as it is published.
      </Box>
      <Box p={3}>
        <TermsAndConditions />
      </Box>
    </Box>
  );
};

export default MailingOrder;
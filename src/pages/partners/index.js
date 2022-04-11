import * as React from "react";

// MUI Components
import { Box } from '@mui/system';
import { getImageById } from "../../settings/images";

// Items To Map
const data = [
  {
    title: "Action Aid",
    attribute: "basilwizi-sponsor-and-partner-actionaid",
    url: "https://zimbabwe.actionaid.org/"
  },
  {
    title: "Austria-Zimbabwe Friendship Association - AZFA",
    url: "https://webarchiv.servus.at/argezim/",
    attribute: "basilwizi-sponsor-and-partner-default",
  },
  {
    title: "British Embassy",
    attribute: "basilwizi-sponsor-and-partner-british-embassy",
    url: "https://www.gov.uk/world/organisations/british-embassy-harare"
  },
  {
    title: "European Union",
    attribute: "basilwizi-sponsor-and-partner-eu",
    url: "https://europa.eu/european-union/index_en"
  },
  {
    title: "Firelght Foundation",
    attribute: "basilwizi-sponsor-and-partner-firelight",
    url: "https://www.firelightfoundation.org/"
  },
  {
    title: "Hivos",
    attribute: "basilwizi-sponsor-and-partner-hivos",
    url: "https://www.hivos.org/"
  },
  {
    title: "Jesuits Orphans Trust",
    url: "#",
    attribute: "basilwizi-sponsor-and-partner-default",
  },
  {
    title: "Kindernothilfe",
    attribute: "basilwizi-sponsor-and-partner-knhl",
    url: "https://www.kindernothilfe.org/"
  },
  {
    title: "Pact",
    attribute: "basilwizi-sponsor-and-partner-pact",
    url: "https://www.pactworld.org/"
  },
  {
    title: "UN Women",
    attribute: "basilwizi-sponsor-and-partner-un-women",
    url: "http://www.unwomen.org/en/trust-funds/fund-for-gender-equality"
  },
  {
    title: "UNICEF UK",
    attribute: "basilwizi-sponsor-and-partner-unicef-uk",
    url: "https://www.unicef.org/zimbabwe/"
  }
];

const PartnersPage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        py: 4,
        alignItems: "center"
      }}
    >
      <Box 
        sx={{ 
          color: "text.primary", 
          fontSize: ["7vw", "3.5vw"], 
          fontWeight: 300,
          fontFamily: "Algerian", 
          color: "text.base", 
        }} 
      >
        Partners and Sponsors
      </Box>
      {
        data.map((item) => {
          const image = getImageById(item.attribute);

          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: 7/8,
                borderBottom: "1.5px dashed #a0a465",
                justifyContent: "space-between",
                py: 4,
                alignItems: "center"
              }}
            >
              <Box
                component="a"
                href={item.url}
                target="_blank"
                rel="noreferer noopener"
                sx={{ 
                  color: "text.base", 
                  fontSize: 14, 
                  fontWeight: "bold",
                  textDecoration: "none",
                  "&:hover,&:focus": {
                    textDecoration: "underline dotted red",
                    color: "text.warning"
                  }
                }}
              >
                {item.title}
              </Box>
              <Box
                component="img"
                sx={{
                  height: "100%",
                  maxHeight: ["65px", "110px"]
                }}
                src={image.img}
                alt={item.title}
              />
            </Box>
          )
        } )
      }
    </Box>
  );
}

export default PartnersPage;
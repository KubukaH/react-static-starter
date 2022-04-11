import * as React from "react";
import { Dialog } from "@reach/dialog";

// MUI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const data1 = [
  {
    title: "Transparency",
    descr: "All our work in the organisation shall be open for public scrutiny and done in a clear and responsible manner for all stakeholders to analyse and comprehend. Regular updates to all stakeholders in various forms will drive this value"
  },
  {
    title: "Respect and equality",
    descr: "All individuals are equal as human beings and by virtue of the inherent dignity of each human person. All human beings are entitled to their human rights without discrimination of any kind, such as race, colour, sex, ethnicity, age, language, religion, political or other opinion, national or social origin, disability, property, birth or other status as explained by the human rights treaty bodies."
  },
  {
    title: "Accountability and Trustworthy",
    descr: "States and other duty-bearers are answerable for the observance of human rights. In this regard, they have to comply with the legal norms and standards enshrined in human rights instruments. Where they fail to do so, aggrieved rights-holders are entitled to institute proceedings for appropriate redress of the situation in accordance with the rules and procedures provided by law."
  },
  {
    title: "Empathy",
    descr: "We shall always put ourselves in the situation of the people of the Zambezi Valley. By so doing, our efforts will serve our community better."
  },
  {
    title: "Sustainable Communities",
    descr: "Keeping the activity going, investing in individuals and groups to keep initiatives going long term, empowering and leaving skills in communities whilst making and maintaining links to the wider society."
  },
  {
    title: "Team work and Participation",
    descr: "Ensuring that everyone has the right to fully participate in the decision-making processes that affect their lives, increasing access to do so by removing barriers and creating opportunities to influence/take part."
  },
  {
    title: "Diligence and commitment",
    descr: "Business-like attitude and commitment to achieving set goals at least cost."
  },
];

function OpenMoreDialogOne(props) {
  const [showDialog1, setShowDialog1] = React.useState(false);
  const open1 = () => setShowDialog1(true);
  const close1 = () => setShowDialog1(false);

  return (
    <>
      <IconButton
        title="See more"
        aria-label="See more"
        size="small"
        onClick={open1}
      >
        <ZoomInIcon size="small" />
      </IconButton>

      {showDialog1 && (
        <Dialog 
          onDismiss={close1}
          style={{
            width: "90%",
            height: "80%",
            marginInline: "auto",
            padding: "0px !important"
          }}
          aria-label="See more about us"
        >
          <IconButton
            title="Thank you"
            aria-label="Thank you"
            size="small"
            onClick={close1}
            sx={{
              mt: ["-48px"],
              mr: ["-48px"],
              float: "right",
              color: "red",
              border: "1px dotted #a0a465",
              "&:hover, &:focus": {
                border: "1px dotted red",
                color: "orange"
              }
            }}
          >
            <ClearIcon size="small" />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              m: "auto",
              overflowY: "scroll"
            }}
          >
            {
              data1.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    flexDirection: ["column","row"],
                    my: 2,
                    borderBottom: "1px solid #a0a465",
                    alignItems: "flex-start"
                  }}
                >
                  <Box
                    sx={{ 
                      fontSize: 15, 
                      fontWeight: "bold", 
                      color: "text.base",
                      width: ["100%", "20%"]
                    }}
                  >
                    <RuleOutlinedIcon fontSize="small" /> {item.title}
                  </Box>
                  <Box
                    sx={{ 
                      fontSize: 15, 
                      fontWeight: "medium", 
                      color: "text.base",
                      ml: 1,
                      width: ["100%", "80%"]
                    }}
                  >
                    {item.descr}
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Dialog>
      )}
    </>
  );
}

const dataObjectives = [
  {
    title: "Objective I",
    descr: "To empower the affected people to advocate for developmental changes and their inclusion in decision making processes on issues that affect their development particularly the use of resources around / from Lake Kariba"
  },
  {
    title: "Objective II",
    descr: "To assist the beneficiaries to improve their socio-economic well being, through the establishment of people centred development projects that meet the basic material needs"
  },
  {
    title: "Objective III",
    descr: "To facilitate the putting in place of legislation, policies, procedures and practices that enhance the capacity of men and women to access, utilise and control their natural resources"
  },
  {
    title: "Objective IV",
    descr: "To promote the cultural and educational development of the beneficiaries"
  },
  {
    title: "Objective V",
    descr: "To combat and reduce the impact of HIV/AIDS pandemic through community based intervention strategies"
  },
  {
    title: "Objective VI",
    descr: "To promote gender, child protection and disability mainstreaming in all programme activities of the organisation"
  },
  {
    title: "Objective VII",
    descr: "To enhance organisational capacity and ensure effective implementation of Basilwizi goals."
  },
];

function OpenMoreDialogTwo(props) {
  const [showDialog2, setShowDialog2] = React.useState(false);
  const open2 = () => setShowDialog2(true);
  const close2 = () => setShowDialog2(false);

  return (
    <>
      <IconButton
        title="See more"
        aria-label="See more"
        size="small"
        onClick={open2}
      >
        <ZoomInIcon size="small" />
      </IconButton>

      {showDialog2 && (
        <Dialog 
          onDismiss={close2}
          aria-label="See more objectives"
          style={{
            width: "90%",
            height: "80%",
            marginInline: "auto",
          }}
        >
          <IconButton
            title="Close"
            aria-label="Close"
            size="small"
            onClick={close2}
            sx={{
              mt: ["-48px"],
              mr: ["-48px"],
              float: "right",
              border: "1px dotted #a0a465",
              "&:hover, &:focus": {
                border: "1px dotted red",
                color: "red"
              }
            }}
          >
            <ClearIcon size="small" />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              m: "auto",
              overflowY: "scroll"
            }}
          >
            {
              dataObjectives.map((obj) => (
                <Box
                  key={obj.title}
                  sx={{
                    display: "flex",
                    flexDirection: ["column","row"],
                    my: 2,
                    borderBottom: "1px solid #a0a465",
                    alignItems: "flex-start"
                  }}
                >
                  <Box
                    sx={{ 
                      fontSize: 15, 
                      fontWeight: "bold", 
                      color: "text.base",
                      width: ["100%", "20%"]
                    }}
                  >
                    <TrackChangesIcon fontSize="small" /> {obj.title}
                  </Box>
                  <Box
                    sx={{ 
                      fontSize: 15, 
                      fontWeight: "medium", 
                      color: "text.base",
                      ml: 1,
                      width: ["100%", "80%"]
                    }}
                  >
                    {obj.descr}
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Dialog>
      )}
    </>
  );
}

const MissionStatement = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
      }}
    >
      <Box
        sx={{
          color: "text.base",
          fontSize: [28,48],
          fontWeight: "medium",
          fontFamily: "Roboto",
          m: "auto",
          py: 4
        }}
      >
        The Mission Statement
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["78%", "40%"],
          height: "100%",
          mx: "auto",
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#vision"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          Vision
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          A sustainable people driven socio-economic development in the Zambezi Valley.
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["82%","48%"],
          height: "100%",
          mx: "auto",
          my: [2, 4],
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#mission"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          Mission
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          Basilwizi is committed to building the capacity of the Tonga and Korekore communities - men, women, young and old, able disabled - for them to realise improved and sustainable well-being and free themselves from poverty..
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["86%","56%"],
          height: "100%",
          mx: "auto",
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#motto"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          Motto
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          The last shall be first
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["90%","64%"],
          height: "100%",
          mx: "auto",
          my: [2, 4],
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#core-values"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          Core Values
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          In achieving its vision and fulfilling its mission Basilwizi shall value a high level of Transparency, respect for all stakeholders, accountability, commitment, team work, empathy ; trustworthy and programme sustainability as well as high ethical standards and social responsibility. Basilwizi will hold on the following values; {" "}
          <OpenMoreDialogOne />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["94%","72%"],
          height: "100%",
          mx: "auto",
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#objectives"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          Objectives
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          To empower the affected people to advocate for developmental changes and their inclusion in decision making processes on issues that affect their development particularly the use of resources around / from Lake Kariba; {" "} <OpenMoreDialogTwo />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: ["98%", "76%"],
          height: "100%",
          mx: "auto",
          my: [2, 4],
          border: "0.5px dashed #a0a465",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "#fff",
          overflow: "hidden"
        }}
      >
        <Box
          id="#mandate"
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.basilwiziColor",
            color: "InfoText",
            fontSize: 48,
            fontWeight: "medium",
            fontFamily: "monospace",
            py: [1, 3],
            textAlign: "center"
          }}
        >
          The Mandate
        </Box>
        <Box
          sx={{
            fontSize: 14,
            color: "text.base",
            p: 4,
            fontWeight: 200,
            fontFamily: "Roboto",
            fontStyle: "quote"
          }}
        >
          Zambezi Valley in general, remain one of the least developed areas in the country, highly vulnerable and chronically food insecure due to external shocks such as drought and crop failure causing annual food shortages, particularly among the poorest and most vulnerable households. Among the underplaying causes of poverty in the Zambezi valley are lack of pro-poor policies and/ or ineffective implementation of exiting policy. Therefore, Basilwizi's work is still relevant and has potential of accomplishing its mission in light of the current political dispensation in Zimbabwe.
        </Box>
      </Box>
    </Box>
  );
}

export default MissionStatement;
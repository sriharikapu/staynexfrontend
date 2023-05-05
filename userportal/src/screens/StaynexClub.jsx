import { Box, IconButton, Typography } from "@mui/material";
import Template from "../components/Template";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { cardList, eventlistclub } from "../constant/staynexclub";
import AnalyticsBox from "../AppComponents/staynexclub/AnalyticsBox";
import { useRef, useState } from "react";
import SingleEvent from "../AppComponents/staynexclub/SingleEvent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";

const StaynexClub = () => {
  const [fullBox, setFullBox] = useState("Explorer");

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <Template>
      <Box>
        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            flex={2}
            p={3}
            sx={{ background: "#1C2023", color: "#fff" }}
          >
            <Box maxWidth="200px">
              <img src="/assets/staynexclub/whiteicon.svg" alt="img" />
              <Typography fontSize="14px" fontWeight="300">
                Discover Switzerland’s best ski resorts and plan the perfect
                holiday
              </Typography>
            </Box>
          </Box>

          <Box flex={3} width="100%">
            <img
              src="/assets/staynexclub/headerimg.svg"
              alt="header"
              width="100%"
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" mt={8}>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            maxWidth="330px"
          >
            <Typography variant="h5" fontWeight="700">
              Your wallet is your passport
            </Typography>
            <Typography fontWeight="500" mt={3}>
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              justifyContent="space-between"
              mt={4}
            >
              <img src="/assets/staynexclub/wallet.svg" alt="wallet" />
              <ArrowRightAltIcon sx={{ fontSize: "50px", color: "#18363B" }} />
              <img src="/assets/staynexclub/account.svg" alt="account" />
            </Box>

            <Typography fontWeight="500" mt={4} mb={2}>
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
          </Box>
        </Box>

        <Box
          textAlign="center"
          sx={{ background: "#F9F9F1", padding: "60px 0" }}
        >
          <Typography variant="h5" fontWeight="700">
            Staynex Explorer Program (Q1 2023)
          </Typography>
          <Typography fontWeight="500" fontSize="14px" mb={3}>
            We reward our Staynex Pass holders with more rewards! By purchasing
            the Staynex PFP, users have their passport that shows
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              padding: "0 60px",
              borderBottom: "1px solid lightgray",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "end" },
            }}
          >
            {cardList.map((card) => (
              <AnalyticsBox
                name={card.name}
                days={card.day}
                nights={card.night}
                fullBox={fullBox}
                setFullBox={setFullBox}
              />
            ))}
          </Box>
          <Typography fontWeight="500" fontSize="14px" mt={3}>
            By buying more NFTs, users create a collection and portfolio of
            timeshare stays globally, by reaching 365 nights.{" "}
          </Typography>

          <Typography fontWeight="500" fontSize="14px" mt={3}>
            They get to live around the world for free!Further discounts per
            tier achieved.
          </Typography>
        </Box>

        <Box
          sx={{ padding: { xs: "70px 0px 20px 10px", sm: "30px 0 30px 50px" } }}
          borderBottom="1px solid lightgray"
        >
          <Typography variant="h5" fontWeight="700">
            Stay at our finest destinations
          </Typography>
          <Typography variant="h6" fontWeight="400">
            Discover Switzerland’s best ski resorts and plan the perfect holiday
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            overflow="scroll"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            ref={elementRef}
          >
            {eventlistclub.map((hotel) => (
              <SingleEvent hotel={hotel} />
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton
              disabled={arrowDisable}
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 10, 281, -10);
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 10, 281, 10);
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="start"
          sx={{
            background: "#F7F6F5",
            flexDirection: { xs: "column", sm: "row" },
          }}
          p={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={4}
            flex={2}
          >
            <Typography variant="h5" fontWeight="700">
              Frequently asked questions
            </Typography>
            <Typography>
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
          </Box>
          <Box flex={3} p={4}>
            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: "#F7F6F5" }} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Some question goes here?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Template>
  );
};

export default StaynexClub;

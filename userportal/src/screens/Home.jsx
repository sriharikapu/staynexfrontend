import { Box } from "@mui/material";
import React, { useRef } from "react";
import HeaderViewer from "../AppComponents/./homecomponents/HeaderViewer";
import HeaderSearch from "../AppComponents/./homecomponents/HeaderSearch";
import HomeHotels from "../AppComponents/./homecomponents/HomeHotels";
import FavouiteDestination from "../AppComponents/./homecomponents/FavouiteDestination";
import Fitness from "../AppComponents/./homecomponents/Fitness";
import HomeEvents from "../AppComponents/homecomponents/HomeEvents";
import StayConnected from "../AppComponents/./homecomponents/StayConnected";
import Footer from "../components/Footer";
import Template from "../components/Template";

const Home = () => {
  const scrollRef = useRef(null);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };  

  let lastscrollvalue;

  return (
    <div style={{maxHeight: '100vh', overflow: 'scroll'}} className="refcontainer" onScroll={() => {
      let a = document.querySelector('.refcontainer'); 
  
      if (lastscrollvalue === undefined) {
          lastscrollvalue = a.scrollTop;
      } else if (a.scrollTop > lastscrollvalue) {
        lastscrollvalue = a.scrollTop;
        handleHorizantalScroll(scrollRef.current, 10, 0.1, -10)
      } else if (a.scrollTop < lastscrollvalue) {
        lastscrollvalue = a.scrollTop;
        handleHorizantalScroll(scrollRef.current, 10, 0.1, 10)  
      }}} >
    <Template>
      <Box>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" }, height: "100%" }}
        >
          <Box flex={2.5} sx={{ background: "#EAE2DB" }}>
            <HeaderViewer />
          </Box>

          <Box flex={7.5} position="relative" height="100%">
            <img
              src="/assets/headerimg.svg"
              alt="headerimg"
              style={{ minHeight: "100%", minWidth: "100%", maxWidth: "100%" }}
            />
            <HeaderSearch />
          </Box>
        </Box>
        <HomeHotels />
        <FavouiteDestination scrollRef={scrollRef} />
        <Fitness />
        <HomeEvents />
        <StayConnected />
        <Footer />
      </Box>
    </Template>
    </div>
  );
};

export default Home;

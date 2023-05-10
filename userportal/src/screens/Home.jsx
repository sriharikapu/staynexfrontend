import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
  const [openModal, setOpenModal] = useState(false);
  const [numberImg, setNumberImg] = useState(1)
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

  useEffect(() => {
    const interval = setInterval(() => {
      if(numberImg === 3) {
        setNumberImg(1)
      }
      else {
        setNumberImg(numberImg + 1)
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [numberImg]);

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
      <div onClick={() => setOpenModal(false)} >
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box flex={2.5} sx={{ background: "#EAE2DB", maxHeight: '348px' }}>
            <HeaderViewer />
          </Box>

          <Box flex={7.5} position="relative" >
            <img
              src={`/assets/headerimg${numberImg}.svg`}
              alt="headerimg"
              style={{display: 'block', minWidth: '100%'}}
            />
            <HeaderSearch openModal={openModal} setOpenModal={setOpenModal} />
          </Box>
        </Box>
        <HomeHotels />
        <FavouiteDestination scrollRef={scrollRef} />
        <Fitness />
        <HomeEvents />
        <StayConnected />
        <Footer />
      </div>
    </Template>
    </div>
  );
};

export default Home;

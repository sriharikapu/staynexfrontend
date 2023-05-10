import { Box, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { hotellist } from "../../constant/homeconstants";
import SingleHotel from "./SingleHotel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeHotels = () => {
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
    <Box sx={{padding: {xs: '70px 0px 20px 10px', sm : '50px 0 30px 70px'}}} borderBottom="1px solid lightgray">
      <Typography fontSize="22px" fontWeight="700" mb={1}>
        Stay at our finest destinations
      </Typography>
      <Typography fontWeight="500" fontSize="14px" >
        Discover Switzerland’s best ski resorts and plan the perfect holiday
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        overflow="scroll"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        mt={2}
        ref={elementRef}
      >
        {hotellist.map((hotel) => (
          <SingleHotel hotel={hotel} />
        ))}
      </Box>

      <Box sx={{display: {xs: 'none', sm: 'flex'}}} >
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
  );
};

export default HomeHotels;

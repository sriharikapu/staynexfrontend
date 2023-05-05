import { Box, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { hotellist } from "../../constant/homeconstants";
import SingleHotel from "../homecomponents/SingleHotel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SimilarHotels = () => {
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
    <Box
      sx={{ padding: { xs: "70px 0px 20px 10px", sm: "30px 0 30px 50px" } }}
      mt={4}
      borderBottom="1px solid lightgray"
    >
      <Typography variant="h5" fontWeight="700">
        Similar properties
      </Typography>
      <Typography variant="h6" fontWeight="400">
        Discover Switzerland’s best ski resorts and plan the perfect holiday
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        overflow="scroll"
        ref={elementRef}
      >
        {hotellist.map((hotel) => (
          <SingleHotel hotel={hotel} />
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
  );
};

export default SimilarHotels;

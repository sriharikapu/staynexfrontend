import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SingleEvent = ({ hotel }) => {
  return (
    <Link className="link">
      <Box mt={1}>
        <Box maxWidth="100%" overflow="hidden">
          <img
            src={hotel.src}
            alt="hotelimg"
            width="100%"
            className="hotelimg"
          />
        </Box>
        <Typography fontSize="15px" fontWeight="500">
          {hotel.title}
        </Typography>
        <Typography fontSize="12px" fontWeight="400">
          {hotel.desc}
        </Typography>
      </Box>
    </Link>
  );
};

export default SingleEvent;

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SingleEvent = ({ hotel }) => {
  return (
    <Link className="link">
      <Box width="370px" mt={1}>
        <img src={hotel.src} alt="hotelimg" width="100%" />
        <Typography variant="h6" fontWeight="500">
          {hotel.title}
        </Typography>
        <Typography fontSize="14px" fontWeight="500">
          {hotel.desc}
        </Typography>
      </Box>
    </Link>
  );
};

export default SingleEvent;

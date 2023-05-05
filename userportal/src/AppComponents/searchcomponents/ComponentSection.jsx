import { Box, Pagination, Stack, Typography } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import ShowerIcon from "@mui/icons-material/Shower";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { searchResultHotel } from "../../constant/searchconstants";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const ComponentSection = () => {

  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#000"
      },
    }
  }));

  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box
        display="flex"
        alignItems="start"
        flexDirection="column"
        gap="20px"
        width="100%"
      >
        {searchResultHotel.map((single) => (
          <Link to={`/single_hotel/${single.id}`} className="link" >
          <Box
            display="flex"
            alignItems="center"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            width="100%"
            gap="20px"
            border="1px solid lightgray"
            borderRadius="5px"
          >
            <Box minWidth="372px" maxHeight="316px" overflow="hidden" >
            <img src={single.img} alt="Hotel" className="hotelimg" />
            </Box>
            <Box width="100%" p={2}>
              <Typography variant="h5" fontWeight="700">
                {single.name}
              </Typography>
              <Typography fontSize="14px" sx={{ color: "rgba(13, 14, 11, 0.47)" }}>
                {single.location}
              </Typography>
              <Typography mt={1} mb={1} fontWeight="700">
                {single.from}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="10px"
                width="100%"
                borderTop="1px solid lightgray"
                pt={1}
              >
                <Box display="flex" alignItems="center" gap="5px">
                  <HotelIcon fontSize="18px" />
                  <Typography fontSize="12px" fontWeight="500">
                    {single.bedrooms}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="5px">
                  <ShowerIcon fontSize="18px" />
                  <Typography fontSize="12px" fontWeight="500">
                    {single.bathroom}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="5px">
                  <NightsStayIcon fontSize="18px" />
                  <Typography fontSize="12px" fontWeight="500">
                    {single.nights}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="5px">
                  <SquareFootIcon fontSize="18px" />
                  <Typography fontSize="12px" fontWeight="500">
                    {single.sqft}
                  </Typography>
                </Box>
              </Box>

              <Typography mt={2} fontSize="14px" fontWeight="700">
                DESCRIPTION
              </Typography>
              <Typography fontSize="12px" sx={{ color: "lightgray" }}>
                {single.decription}
              </Typography>

              <Typography mt={2} fontSize="14px" fontWeight="700">
                AMENITIES
              </Typography>
              <Box display="flex" alignItems="center" gap="10px" mt={1}>
                <img src="/assets/icons/ac.svg" alt="tv" />
                <img src="/assets/icons/tv.svg" alt="tv" />
                <img src="/assets/icons/pool.svg" alt="tv" />
                <img src="/assets/icons/pet.svg" alt="tv" />
                <img src="/assets/icons/tv1.svg" alt="tv" />
                <img src="/assets/icons/wash.svg" alt="tv" />
                <img src="/assets/icons/wifi.svg" alt="tv" />
              </Box>
            </Box>
          </Box>
          </Link>
        ))}
      </Box>
      <Stack spacing={2} mt={4} mb={4} >
        <Pagination count={10} classes={{ ul: classes.ul }} />
      </Stack>
    </Box>
  );
};

export default ComponentSection;

import { Box, Typography } from "@mui/material";
import { favoritelist } from "../../constant/homeconstants";

const FavouiteDestination = ({ scrollRef }) => {
  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" } }}
      flexDirection="column"
      mb={10}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={15}
        mb={15}
      >
        <Typography variant="h5" fontWeight="700" mb={1.5} >
          Favorite Destinations
        </Typography>
        <Typography fontWeight="500" >
          Discover Switzerland’s best ski resorts and plan the perfect holiday
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        ref={scrollRef}
        sx={{ overflowX: "scroll", overflowY: "visible" }}
      >
        {favoritelist.map((fav) => (
          <div className="favimg">
            <img src={fav.src} alt="favimg" />
            <Typography fontSize="14px" fontWeight="500" mt={8} >
              {fav.name}
            </Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default FavouiteDestination;

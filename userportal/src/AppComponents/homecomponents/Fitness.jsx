import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import { MainButton } from "../../components/Buttons";
import { sportsimages } from "../../constant/homeconstants";

const Fitness = () => {
  return (
    <Box sx={{display: {xs: 'none', md: 'flex'}}} alignItems="center" height={472}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ background: "rgb(253, 47, 47)", flex: 4, height: "100%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          maxWidth="350px"
        >
          <Box display="flex" alignItems="center" gap="20px" mb={2}>
            <Box display="flex" alignItems="center" gap="10px">
              <img src="/assets/logowhite.svg" alt="logowhite" />
              <Typography variant="h5" fontWeight="700" sx={{ color: "#fff" }}>
                staynex
              </Typography>
            </Box>
            <ClearIcon sx={{ color: "#fff" }} />
            <img
              src="/assets/arsenal.png"
              alt="arsenal"
              width={60}
              height={60}
            />
          </Box>
          <Typography
            variant="h5"
            fontWeight="500"
            sx={{ color: "#fff" }}
            mb={2}
          >
            Stay at our finest destinations
          </Typography>
          <Typography sx={{ color: "#fff" }} fontWeight="300">
            Discover Switzerland’s best ski resorts and plan the perfect holiday
          </Typography>
          <Box color="white.main" mt={2} mb={2}>
            <Box display="flex" alignItems="center" gap="10px">
              <DoneIcon />
              <Typography>
                Bringing together hospitality and football
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <DoneIcon />
              <Typography>Get exposure of 100 million fans</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <DoneIcon />
              <Typography>Offer once in a lifetime experiences</Typography>
            </Box>
          </Box>

          <MainButton
            variant="contained"
            text="Global partnerships"
            color="#000"
            bgcolor="white"
          />
        </Box>
      </Box>
      <Box
        flex={6}
        sx={{
          background: "#450808",
          height: "100%",
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center" gap="20px" >
          {sportsimages.map((img) => (
            <img src={img.src} alt="football" />
          ))}
        </Box>
        <Box textAlign="center" maxWidth="300px" >
            <Typography variant="h6" fontWeight="500" sx={{ color: "#fff" }} >Staynex x Arsenal NFTs</Typography>
            <Typography fontSize="12px" fontWeight="300" sx={{ color: "#fff" }} >Discover Switzerland’s best ski resorts and plan the perfect holiday</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Fitness;

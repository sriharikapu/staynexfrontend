import { Box, Button, Typography } from "@mui/material";
import Template from "../components/Template";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../components/Footer"

const StaynexGlobal = () => {
  return (
    <Template>
      <Box sx={{ overflowX: "hidden" }}>
        <Box sx={{ position: "relative" }}>
          <img src="assets/staynexglobal/stadium.svg" alt="" />
          <Box
            width="100%"
            height="100%"
            sx={{
              background: "#2E211D",
              position: "absolute",
              top: "0",
              left: "0",
              opacity: 0.8,
            }}
          ></Box>

          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            sx={{
              color: "#fff",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <Typography variant="h5" fontWeight="700">
              Global Partnerships
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight="300"
              width="300px"
              textAlign="center"
            >
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="30px"
              mt={2}
            >
              <Box display="flex" alignItems="center" gap="10px">
                <img src="/assets/logowhite.svg" alt="logo" />
                <Typography variant="h4" fontWeight="700">
                  staynex
                </Typography>
              </Box>
              <CloseIcon />
              <img
                src="/assets/arsenal.png"
                alt="arsenal"
                width="80px"
                height="80px"
              />
            </Box>
          </Box>
        </Box>

        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="20px"
            flex={1}
            p={4}
          >
            <Typography variant="h5" fontWeight="500">
              Arsenal FC
            </Typography>
            <Typography>
              As the official partner of Arsenal FC, we are able to create
              Staynex x Arsenal Co-Branded NFTs. <br /> <br /> Where the NFT
              holders will get exclusive match tickets, Arsenal experiences
              (meet the players), memorabilia and a uniquely designed Arsenal
              NFT. <br /> <br /> Participating hotels will get massive exposure
              through co-marketing campaigns and to leverage of the club’s 100
              million followers.
            </Typography>
            <img
              src="/assets/arsenal.png"
              alt="arsenal"
              width="60px"
              height="70px"
            />
          </Box>
          <Box flex={1} width="100%">
            <img
              src="/assets/staynexglobal/player.svg"
              alt="player"
              width="100%"
            />
          </Box>
        </Box>

        <Box position="relative">
          <img src="/assets/staynexglobal/redimg.svg" alt="red" />

          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            sx={{
              color: "#fff",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <Typography variant="h5" fontWeight="500">
              Staynex x Arsenal NFTs
            </Typography>
            <Typography textAlign="center" width="320px">
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ width: { xs: "100%", sm: "600px" } }}
              mt={4}
              p={1}
            >
              <img
                src="/assets/arsenal/arsenal1.svg"
                alt="arsenal"
                width="30%"
              />
              <img
                src="/assets/arsenal/arsenal2.svg"
                alt="arsenal"
                width="40%"
              />
              <img
                src="/assets/arsenal/arsenal3.svg"
                alt="arsenal"
                width="30%"
              />
            </Box>
          </Box>
        </Box>

        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box position="relative">
            <img src="/assets/staynexglobal/redpattern.svg" alt="pattern" />

            <Box
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              gap="20px"
              flexDirection="column"
              justifyContent="center"
              sx={{
                color: "#fff",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              <Typography variant="h4" width="350px" fontWeight="500">
                Join the Global Partnership program
              </Typography>
              <Typography width="350px" fontSize="14px">
                Discover Switzerland’s best ski resorts and plan the perfect
                holiday
              </Typography>
              <Box width="350px">
                <Button
                  variant="contained"
                  color="white"
                  sx={{ color: "#000", width: "100px" }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src="/assets/staynexglobal/training.svg" alt="training" />
          </Box>
        </Box>

        <Box display="flex">
          <Box flex={1} width="100%">
            <img
              src="/assets/staynexglobal/img1.svg"
              alt="staynex"
              width="100%"
            />
          </Box>
          <Box flex={1} width="100%">
            <img
              src="/assets/staynexglobal/img2.svg"
              alt="staynex"
              width="100%"
            />
          </Box>
          <Box flex={1} width="100%">
            <img
              src="/assets/staynexglobal/img1.svg"
              alt="staynex"
              width="100%"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="space-between"
          padding="40px 0"
          sx={{ background: "#320F0F", color: "#fff" }}
          height="400px"
        >
          <Box
            display="flex"
            alignItems="center"
            borderBottom="1px solid lightgray"
            p={4}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box display="flex" alignItems="center" gap="10px">
              <img src="/assets/staynexglobal/done.svg" alt="done" />
              <Typography>Get exposure of 100 million fans</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <img src="/assets/staynexglobal/done.svg" alt="done" />
              <Typography>Get exposure of 100 million fans</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <img src="/assets/staynexglobal/done.svg" alt="done" />
              <Typography>Get exposure of 100 million fans</Typography>
            </Box>
          </Box>
          <Box mt={2} >
            <Typography textAlign="center" sx={{width: {xs: '400px', sm: '700px'}}}>The full Arsenal experience</Typography>
            <Typography textAlign="center" sx={{width: {xs: '400px', sm: '700px'}}} >
              Get ready for a truly unforgettable experience. With match tickets
              to see the Gunners in action, exclusive experiences, and the
              chance to meet your favorite players, this package has it all.
              Don’t miss out on the chance to be a part of the Arsenal family
              and make memories that will last a lifetime. Book now and get
              ready for the ultimate Arsenal experience!
            </Typography>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Template>
  );
};

export default StaynexGlobal;

import { Box, Button, Typography } from "@mui/material";
import Template from "../components/Template";
import TwitterIcon from "@mui/icons-material/Twitter";
import { nftlist, passiconlist } from "../constant/staynexpass";
import Footer from "../components/Footer";

const StaynexPass = () => {
  return (
    <Template>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          height="300px"
          gap="10px"
          sx={{ background: "#000", color: "#fff" }}
        >
          <Box display="flex" alignItems="center" gap="10px">
            <img src="/assets/logowhite.svg" alt="logo" />
            <Typography variant="h4" fontWeight="500">
              staynex
            </Typography>
          </Box>
          <Typography variant="h4" fontWeight="500">
            The world is your home
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src="assets/staynexpass/back.jpg"
            alt=""
            width="100%"
            height="600px"
          />
          <Box
            width="100%"
            height="600px"
            sx={{
              background: "red",
              position: "absolute",
              top: "0",
              left: "0",
              opacity: 0.6,
            }}
          ></Box>
          <Box
            width="100%"
            height="600px"
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
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxWidth="600px"
              gap="10px"
            >
              <Typography variant="h4" fontWeight="500">
                OFFICIAL PARTNER
              </Typography>
              <img
                src="/assets/arsenal.png"
                alt="arsenal"
                width={150}
                height={150}
              />
              <Typography textAlign="center">
                We're proud to announce Staynex as Arsenal FC's Official Hotel
                and Resort Membership NFT Partner. Stay tuned to enjoy an
                experience of a lifetime!
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="17px"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
              mt={4}
            >
              <Box
                sx={{
                  background: "rgba(56,56,56, 0.4)",
                  padding: "10px",
                  maxWidth: "200px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize="12px" textAlign="center">
                  Stay at your most favourite places in London
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(56,56,56, 0.4)",
                  padding: "10px",
                  maxWidth: "200px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize="12px" textAlign="center">
                  Watch Arsenal FC matches at the Emirates Stadium
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(56,56,56, 0.4)",
                  padding: "10px",
                  maxWidth: "200px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize="12px" textAlign="center">
                  Get a 'behind-the-scenes' tour of London Colney
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(56,56,56, 0.4)",
                  padding: "10px",
                  minHeight: "60px",
                  maxWidth: "200px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize="12px" textAlign="center">
                  And a whole lot more!
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            mt={-0.5}
            sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
          >
            <Box flex={3} maxWidth="100%" position="relative">
              <img
                src="/assets/staynexpass/pattern.svg"
                alt="pattern"
                width="100%"
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  sx={{ padding: { xs: "10px", sm: "0 0 0 60px" } }}
                  mt={2}
                >
                  <Typography variant="h4" fontWeight="500" textAlign="left">
                    The Staynex Platform
                  </Typography>
                  <Typography fontWeight="500">
                    An exclusive vacation club platform that allows members the
                    usage rights to resorts globally on an annual basis, and the
                    ability to earn rewards by holding onto the membership. We
                    use blockchain to tokenize ‘stays’ and to embed them onto
                    NFTs, which represents your membership and a number of
                    nights allocated to you at the property.
                  </Typography>
                  <Box mt={6} mb={2}>
                    <Typography variant="h6" fontWeight="500">
                      PRESS AND MEDIA
                    </Typography>
                    <Box display="flex" alignItems="center" gap="30px">
                      <Button
                        variant="contained"
                        color="orange"
                        sx={{ width: "200px", lineHeight: "15px" }}
                      >
                        Download Staynex's Official Press Kit
                      </Button>
                      <Box display="flex" alignItems="center" gap="10px">
                        <TwitterIcon />
                        <Box>
                          <Typography>Follow us</Typography>
                          <Typography>@staynexcom</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box flex={2} maxWidth="100%">
              <img
                src="/assets/staynexpass/house.svg"
                alt="back"
                width="100%"
              />
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            minHeight="650px"
            sx={{ background: "#FF672D", color: "#fff" }}
          >
            <Box display="flex" justifyContent="flex-start" mb={3} mt={2}>
              <Typography variant="h5" fontWeight="500">
                Imagine an NFT that allows you to
              </Typography>
            </Box>
            <Box
              display="flex"
              gap="20px"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              {nftlist.map((nft) => (
                <Box maxWidth="330px">
                  <img src={nft.src} alt="NFT" />
                  <Typography mt={1} mb={2}>
                    {nft.title}
                  </Typography>
                  <Typography>{nft.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
            mt={2}
          >
            <Box flex={2.5} maxWidth="100%">
              <img
                src="/assets/staynexpass/passimg2.svg"
                alt="passimg"
                width="50%"
                className="small"
              />
              <img
                src="/assets/staynexpass/passimg1.svg"
                alt="passimg"
                width="50%"
              />
            </Box>
            <Box flex={5}>
              <Box
                display="flex"
                alignItems="center"
                gap="5px"
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <img src="/assets/staynexpass/icon.svg" alt="logo" />
                <Typography fontSize="30px" fontWeight="700">
                  The first of its kind
                </Typography>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                gap="20px"
                sx={{ justifyContent: { xs: "center", sm: "left" } }}
                ml={2}
                mt={2}
              >
                {passiconlist.map((icon) => (
                  <Box maxWidth="250px">
                    <img src={icon.src} alt="icon" />
                    <Typography fontWeight="500">{icon.title}</Typography>
                    <Typography fontSize="12px">{icon.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box display="flex" sx={{flexDirection: {xs: 'column-reverse', sm: 'row'}}} >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              flex={2.5}
              sx={{ background: "#0E1F22",zIndex: '-23',  }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{ color: "#fff", }}
                maxWidth="400px"
                p={4}
              >
                <Typography variant="h4" fontWeight="500">
                  Browse our resorts & properties
                </Typography>
                <Typography fontSize="20px">
                  Discover Switzerland’s best ski resorts and plan the perfect
                  holiday
                </Typography>
                <Button variant="contained" color="white" sx={{color: '#000'}} >Explore</Button>
              </Box>
            </Box>
            <Box flex={3} width="100%" zIndex={-3344} >
              <img
                src="/assets/staynexpass/boatimg.svg"
                alt="boat"
                width="100%"
              />
            </Box>
          </Box>

          <Footer />
        </Box>
      </Box>
    </Template>
  );
};

export default StaynexPass;

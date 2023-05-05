import { Box, Typography } from "@mui/material";
import Template from "../components/Template";
import ImageGallery from "../AppComponents/singlehotel/ImageGallery";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ChairIcon from "@mui/icons-material/Chair";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { hotelFeatures, hotelPasses } from "../constant/singlehotel";
import SinglePass from "../AppComponents/singlehotel/SinglePass";
import GoogleMapReact from "google-map-react";
import SimilarHotels from "../AppComponents/singlehotel/SimilarHotels";
import Footer from "../components/Footer"

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const SingleHotel = () => {

  return (
    <Template>
      <>
        <Box
          sx={{ padding: { xs: "5px 10px", md: "0 10%" } }}
          position="relative"
        >
          <Box
            height="50vh"
            sx={{ background: "pink", opacity: 0.4 }}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            zIndex={-100}
          ></Box>
          <Typography variant="h5" fontWeight="500" pt={3}>
            Nazeki Villa
          </Typography>
          <Typography sx={{ width: { xs: "100%", sm: "50%" } }} fontSize="14px">
            Jl. Pura Batu Pageh No.89, Ungasan, Kec. Kuta Sel., Kabupaten
            Badung, Bali 80361, Indonesia
          </Typography>
          <ImageGallery />

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <FacebookIcon />
            <InstagramIcon />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            borderBottom="1px solid lightgray"
            gap="50px"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            pb={1}
          >
            <Box
              flex={1}
              sx={{ borderBottom: { xs: "1px solid lightgray", sm: "none" } }}
              pb={1}
            >
              <Typography variant="h5" fontWeight="500">
                Nazeki Villa
              </Typography>
              <Typography fontSize="14px" mt={2}>
                You're eligible for a Genius discount at Nazeki Villa! To save
                at this property, all you have to do is sign in. <br />
                <br /> Situated 1.5 km from Green Bowl Beach, Nazeki Villa
                offers a garden, a shared lounge and air-conditioned
                accommodation with a balcony and free WiFi. The villa provides
                guests with a terrace, mountain views, a seating area, satellite
                flat-screen TV, a fully equipped kitchen with a fridge and a
                dishwasher, and a private bathroom with shower and free
                toiletries. A microwave, a stovetop and toaster are also
                available, as well as a coffee machine and a kettle.
              </Typography>
            </Box>
            <Box
              flex="1"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Typography variant="h6" fontWeight="500">
                Property information
              </Typography>
              <Box display="flex" alignItems="center" gap="80px" mt={3}>
                <Box>
                  <Typography color="lightgray" mb={2}>
                    Type
                  </Typography>
                  <DinnerDiningIcon />
                  <Typography>Resort</Typography>
                </Box>
                <Box>
                  <Typography color="lightgray" mb={2}>
                    Bedrooms
                  </Typography>
                  <ChairIcon />
                  <Typography>3 Bedrooms</Typography>
                </Box>
                <Box>
                  <Typography color="lightgray" mb={2}>
                    Size
                  </Typography>
                  <SquareFootIcon />
                  <Typography>3,500 sqft</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gap="30px"
            padding="20px 0"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            {hotelFeatures.map((feat) => (
              <Box display="flex" alignItems="center" gap="10px" key={feat.id}>
                {feat.icon}
                <Typography fontWeight="500">{feat.name}</Typography>
              </Box>
            ))}
          </Box>

          <Box display="flex" flexDirection="column" gap="20px">
            {hotelPasses.map((pass) => (
              <SinglePass pass={pass} />
            ))}
          </Box>
        </Box>

        <Box
          mt={10}
          height="300px"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1.5}
            padding="0 20px"
            textAlign="center"
            sx={{ background: "#F7F6F5", flexDirection: "column" }}
          >
            <Typography color="lightgray" >Address</Typography>
            <Typography fontWeight="500" >Kunang Kunang Tent Resort</Typography>
            <Typography fontSize="14px" color="lightgray" >
              Labuan Bajo, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara
              Tim. 86554, Indonesia
            </Typography>
          </Box>
          <Box flex={3}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={location}
              defaultZoom={17}
            />
          </Box>
        </Box>

        <SimilarHotels />

        <Footer />
      </>
    </Template>
  );
};

export default SingleHotel;

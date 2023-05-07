import { Box, Button, Typography } from "@mui/material";
import Template from "../components/Template";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "../components/Footer";

const StaynexProperty = () => {
  return (
    <Template>
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          display="flex"
          position="relative"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            flex={1}
            sx={{ background: "#FDD109" }}
            padding="50px 0"
          >
            <Typography
              textAlign="center"
              maxWidth="300px"
              variant="h4"
              fontWeight="700"
            >
              List your property on Staynex{" "}
            </Typography>
            <Typography textAlign="center" maxWidth="250px" mt={2}>
              Registration is free and can take as little as 15 minutes to
              complete – get started today.
            </Typography>
          </Box>
          <Box flex={1} width="100%">
            <img
              src="/assets/staynexproperty/rickshaw.svg"
              alt="rickshaw"
              width="100%"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{
              position: "absolute",
              top: { xs: "55%", sm: "50px" },
              right: { xs: "5px", sm: "80px" },
              background: "#fff",
              width: { xs: "95%", sm: "400px" },
            }}
            borderRadius="10px"
            p={2}
          >
            <Typography variant="h6" fontWeight="700">
              Create new listing
            </Typography>
            <Typography fontSize="14px">
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
            <Box display="flex" gap="5px" alignItems="center">
              <DoneIcon />
              <Typography fontSize="14px">
                Official partner of Arsenal FC
              </Typography>
            </Box>
            <Box display="flex" gap="5px" alignItems="center">
              <DoneIcon />
              <Typography fontSize="14px">
                Access more than 100k travelers
              </Typography>
            </Box>

            <input
              type="text"
              className="inputform"
              placeholder="Bruno Fernandes"
            />
            <input
              type="text"
              className="inputform"
              placeholder="bruno@kunangkunang.com"
            />
            <input
              type="text"
              className="inputform"
              placeholder="+65  122456849"
            />
            <Typography fontSize="12px">
              By continuing, you agree to let Staynex email you regarding your
              property registration.
            </Typography>
            <Button
              sx={{ background: "#353CE5", color: "#fff" }}
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            background: "#120505",
            color: "#fff",
            padding: { xs: "10px", sm: "10px 100px" },
          }}
        >
          <Box display="flex" alignItems="center" gap="20px">
            <img
              src="/assets/arsenal.png"
              alt="arsenal"
              width="40px"
              height="50px"
            />
            <Typography>
              Official Hotel & Resort Membership Partner of Arsenal FC
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding="60px 0"
        >
          <Box display="flex" alignItems="center" gap="50px">
            <Box display="flex" alignItems="center" gap="5px">
              <img src="/assets/logo.svg" alt="logo" />
            </Box>
            <CloseIcon />
            <img
              src="/assets/arsenal.png"
              alt="arsenal"
              width="70px"
              height="80px"
            />
          </Box>
          <Typography variant="h6" mt={2} fontWeight="700" textAlign="center">
            We are the Official Hotel & Resort Membership Partner of Arsenal FC
          </Typography>
          <Typography fontWeight="500" mt={2}>
            Join our Global Partnerships Program today
          </Typography>
          <Box display="flex" alignItems="center" gap="5px" mt={1}>
            <DoneIcon />
            <Typography fontSize="14px">
              Bringing together hospitality and football
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="5px" mt={1}>
            <DoneIcon />
            <Typography fontSize="14px">
              Get exposure of 100 million fans
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="5px" mt={1}>
            <DoneIcon />
            <Typography fontSize="14px">
              Offer once in a lifetime experiences
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="orange"
            sx={{ color: "#fff", mt: 2 }}
          >
            Global Partnerships Program
          </Button>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          borderBottom="1px solid lightgray"
          borderTop="1px solid lightgray"
          padding="50px 0"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box mb={2} maxWidth="150px" textAlign="center">
            <Typography variant="h6" fontWeight="700" mb={1}>
              MAXIMIZE
            </Typography>
            <img src="/assets/staynexproperty/max.svg" alt="max" />
            <Typography mt={1} fontWeight="500">
              Sales, Revenue & Occupancy
            </Typography>
          </Box>

          <Box mb={2} maxWidth="150px" textAlign="center">
            <Typography variant="h6" fontWeight="700" mb={1}>
              GLOBAL REACH
            </Typography>
            <img src="/assets/staynexproperty/global.svg" alt="max" />
            <Typography mt={1} fontWeight="500">
              Sales, Revenue & Occupancy
            </Typography>
          </Box>

          <Box mb={2} maxWidth="150px" textAlign="center">
            <Typography variant="h6" fontWeight="700" mb={1}>
              REDUCE
            </Typography>
            <img src="/assets/staynexproperty/speaker.svg" alt="max" />
            <Typography mt={1} fontWeight="500">
              Sales, Revenue & Occupancy
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          p={1}
          mt={3}
        >
          <Typography
            variant="h5"
            fontWeight="700"
            textAlign="center"
            maxWidth="350px"
          >
            Which allows your property to create and maximize revenue
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "30px", sm: "100px" },
            }}
            mt={4}
          >
            <Box display="flex" flexDirection="column" gap="30px">
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon1.svg" alt="icon" />
                <Typography fontWeight="500">
                  Create{" "}
                  <span style={{ color: "#E55735" }}>additional revenue</span>{" "}
                  streams through Timeshare products
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon2.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>
                    Maximizing lower occupancy
                  </span>{" "}
                  and off peak days
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon3.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>Increase</span> ADR and
                  Revenue
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap="30px" flexDirection="column">
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon4.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>
                    Maximize ancillary revenue
                  </span>{" "}
                  by monetizing amenities
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon5.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>Drive demand</span> and
                  exposure through Global Partners
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon6.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>Increase</span> in repeated
                  bookings
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
            flex={1.5}
            sx={{ background: "#EAE2DB" }}
            p={4}
          >
            <Typography variant="h5" fontWeight="700" mb={3}>
              Introducing Staynex
            </Typography>
            <Typography
              fontWeight="500"
              sx={{ maxWidth: { xs: "100%", sm: "70%" } }}
            >
              Staynex is a platform that enables resorts and hotels to run their
              own residence club/timeshare program.
              <br /> <br />
              Through Web 3 technology, properties can instantly create and
              embed these timeshare products onto NFTs.
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            flex={2}
            height="470px"
            p={1}
            sx={{ background: "#120505" }}
          >
            <img src="/assets/staynexproperty/sp1.svg" alt="sp" />
            <img src="/assets/staynexproperty/sp2.svg" alt="sp" />
            <img src="/assets/staynexproperty/sp3.svg" alt="sp" />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          padding="10%"
        >
          <Typography variant="h5" fontWeight="500" mb={2}>
            How Staynex redefines timeshare
          </Typography>
          <Typography maxWidth="650px" mb={8}>
            Using Web 3 technology, we’ve studied the timeshare business,
            keeping all the benefits and removing the frictions that have bogged
            this industry down
          </Typography>

          <Box display="flex" justifyContent="left" flexWrap="wrap" gap="20px">
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede1.svg" alt="rede" />
              <Typography fontSize="14px">
                Peer-to-Peer -> Eliminates intermediaries
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede2.svg" alt="rede" />
              <Typography fontSize="14px">
                Clear interface for customers to compare accommodation costs
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede3.svg" alt="rede" />
              <Typography fontSize="14px">
                A real-time marketplace where users can trade their timeshare
                products
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede4.svg" alt="rede" />
              <Typography fontSize="14px">
                Transparency of ownership on blockchain
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede5.svg" alt="rede" />
              <Typography fontSize="14px">
                Nights tokenization enables properties of all sizes to
                participate in the program
              </Typography>
            </Box>
            <Box
              sx={{
                minWidth: { xs: "100%", sm: "31%" },
                maxWidth: { xs: "100%", sm: "31%" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <img src="/assets/staynexproperty/rede6.svg" alt="rede" />
              <Typography fontSize="14px">
                Centralized platform with global and extensive marketing
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding="5%"
          minHeight="500px"
          sx={{ background: "#F9F9F1" }}
        >
          <Typography variant="h5" fontWeight="700">
            Staynex Passes
          </Typography>
          <Typography fontWeight="500" mb={2}>
            How Staynex Passes are created
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap="30px"
            mb={4}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{ minWidth: { xs: "100%", sm: "33%" } }}
              border="1px solid lightgray"
              padding="20px"
              borderRadius="10px"
            >
              <Typography
                sx={{
                  background: "#FF672D",
                  padding: "3px 10px",
                  borderRadius: "50%",
                  color: "#fff",
                }}
              >
                1
              </Typography>
              <Typography fontSize="14px" fontWeight="500">
                We tokenize your ‘nights’ into Staynex Passes
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{ maxWidth: { xs: "100%", sm: "30%" } }}
              border="1px solid lightgray"
              padding="20px"
              borderRadius="10px"
            >
              <Typography
                sx={{
                  background: "#FF672D",
                  padding: "3px 10px",
                  borderRadius: "50%",
                  color: "#fff",
                }}
              >
                2
              </Typography>
              <Typography fontSize="14px" fontWeight="500">
                By allocating an amount of rooms inventory to be sold as
                “Timeshare Memberships”
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{ maxWidth: { xs: "100%", sm: "30%" } }}
              border="1px solid lightgray"
              padding="20px"
              borderRadius="10px"
            >
              <Typography
                sx={{
                  background: "#FF672D",
                  padding: "3px 10px",
                  borderRadius: "50%",
                  color: "#fff",
                }}
              >
                3
              </Typography>
              <Typography fontSize="14px" fontWeight="500">
                These "Timeshare Products" don’t conflict with the usual Room
                Sales.
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              gap: { xs: "20px", sm: "50px" },
              flexDirection: { xs: "column", sm: "row" },
            }}
            mt={2}
          >
            <img src="/assets/staynexproperty/pass1.svg" alt="pass" />
            <Box sx={{ rotate: { xs: "90deg", sm: "0deg" } }}>
              <img src="/assets/staynexproperty/arrow.svg" alt="pass" />
            </Box>
            <img src="/assets/staynexproperty/pass2.svg" alt="pass" />
            <Box sx={{ rotate: { xs: "90deg", sm: "0deg" } }}>
              <img src="/assets/staynexproperty/arrow.svg" alt="pass" />
            </Box>
            <img src="/assets/staynexproperty/pass3.svg" alt="pass" />
            <Box sx={{ rotate: { xs: "90deg", sm: "0deg" } }}>
              <img src="/assets/staynexproperty/arrow.svg" alt="pass" />
            </Box>
            <img src="/assets/staynexproperty/pass4.svg" alt="pass" />
          </Box>
        </Box>

        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="450px"
            flex={1.5}
            sx={{ background: "#101014" }}
          >
            <img src="/assets/staynexproperty/day1.svg" alt="Day" />
            <img src="/assets/staynexproperty/day2.svg" alt="Day" />
            <img src="/assets/staynexproperty/day3.svg" alt="Day" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="7%"
            height="450px"
            flex={2}
            sx={{ background: "#F7F6F5" }}
          >
            <Typography variant="h5" fontWeight="700">
              StayDay Pass
            </Typography>
            <Typography fontWeight="500" mt={2}>
              Staynex enables the creation of Stayday Passes. Unlock new Annual
              Revenue from your hotel and resort amenities and facilities.
            </Typography>
            <Box display="flex" flexDirection="column" gap="30px" mt={2}>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon1.svg" alt="icon" />
                <Typography fontWeight="500">
                  Create{" "}
                  <span style={{ color: "#E55735" }}>additional revenue</span>{" "}
                  streams through Timeshare products
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon2.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>
                    Maximizing lower occupancy
                  </span>{" "}
                  and off peak days
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="5px">
                <img src="/assets/staynexproperty/icon3.svg" alt="icon" />
                <Typography fontWeight="500">
                  <span style={{ color: "#E55735" }}>Increase</span> ADR and
                  Revenue
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          padding="10%"
          minHeight="550px"
          sx={{ background: "#F15A29", color: "#fff" }}
        >
          <Typography variant="h5" fontWeight="500" mb={2}>
            This allows us to give our users
          </Typography>
          <Typography mb={6} maxWidth="400px">
            Discover Switzerland’s best ski resorts and plan the perfect holiday
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="30px"
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user1.svg" alt="rede" />
              <Typography fontSize="14px">
                The income stability of real estate
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user2.svg" alt="rede" />
              <Typography fontSize="14px">
                The ability to travel the world knowing you always have a ‘home’
                in every country
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user3.svg" alt="rede" />
              <Typography fontSize="14px">
                The ability to liquidate anytime when needed
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user4.svg" alt="rede" />
              <Typography fontSize="14px">
                The ability to buy the ‘time’ you need at a property
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user5.svg" alt="rede" />
              <Typography fontSize="14px">
                Doesn’t force users to use up their vacations and rewards them
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", sm: "31%" },
                minWidth: { xs: "100%", sm: "31%" },
              }}
            >
              <img src="/assets/staynexproperty/user6.svg" alt="rede" />
              <Typography fontSize="14px">
                Increase in benefits the more the user purchases
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          position="relative"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flex={1}
            sx={{ background: "#1D1111", color: "#fff" }}
            padding="5%"
          >
            <Typography maxWidth="300px" variant="h4" fontWeight="700">
              List your property on Staynex{" "}
            </Typography>
            <Typography fontSize="14px" maxWidth="300px" mt={2}>
              Registration is free and can take as little as 15 minutes to
              complete – get started today.
            </Typography>
            <Typography variant="h6" fontWeight="500" maxWidth="300px" mt={3}>
              Create new listing
            </Typography>
            <Typography fontSize="14px" maxWidth="300px" mt={1}>
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
            <Box display="flex" alignItems="center" gap="5px" mt={1}>
              <DoneIcon />
              <Typography fontSize="14px">
                Bringing together hospitality and football
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="5px" mt={1}>
              <DoneIcon />
              <Typography fontSize="14px">
                Get exposure of 100 million fans
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="5px" mt={1}>
              <DoneIcon />
              <Typography fontSize="14px">
                Offer once in a lifetime experiences
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap="10px" mt={4}>
              <img
                src="/assets/arsenal.png"
                alt="arsenal"
                width="60px"
                height="70px"
              />
              <Typography maxWidth="250px">
                Official hotel & resort membership partner of Arsenal FC
              </Typography>
            </Box>
          </Box>
          <Box width="100%" flex={1.7}>
            <img
              src="/assets/staynexproperty/formbg.svg"
              alt="rickshaw"
              width="100%"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="5px"
            sx={{
              position: "absolute",
              top: { xs: "48%", sm: "50px" },
              right: { xs: "5px", sm: "80px" },
              background: "#fff",
              width: { xs: "95%", sm: "400px" },
            }}
            borderRadius="10px"
            p={2}
          >
            <Typography variant="h6" fontWeight="700">
              Create new listing
            </Typography>
            <Typography fontSize="14px">
              Discover Switzerland’s best ski resorts and plan the perfect
              holiday
            </Typography>
            <Box display="flex" gap="5px" alignItems="center">
              <DoneIcon />
              <Typography fontSize="14px">
                Official partner of Arsenal FC
              </Typography>
            </Box>
            <Box display="flex" gap="5px" alignItems="center">
              <DoneIcon />
              <Typography fontSize="14px">
                Access more than 100k travelers
              </Typography>
            </Box>

            <input
              type="text"
              className="inputform"
              placeholder="Bruno Fernandes"
            />
            <input
              type="text"
              className="inputform"
              placeholder="bruno@kunangkunang.com"
            />
            <input
              type="text"
              className="inputform"
              placeholder="+65  122456849"
            />
            <Typography fontSize="12px">
              By continuing, you agree to let Staynex email you regarding your
              property registration.
            </Typography>
            <Button
              sx={{ background: "#353CE5", color: "#fff" }}
              variant="contained"
            >
              Get Started
            </Button>
          </Box>
        </Box>

        <Footer />
      </Box>
    </Template>
  );
};

export default StaynexProperty;

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import PassModal from "../../components/PassModal";
import { MainButton } from "../../components/Buttons";

const SinglePass = ({ pass }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid lightgray"
      borderRadius="5px"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ background: "#EAE2DB", width: "100%" }}
        flex={1}
      >
        <img src={pass.src} alt="Pass" />
      </Box>

      <Box flex={2} width="100%" padding="10px 30px">
        <Typography variant="h5" fontWeight="500">
          {pass.name}
        </Typography>
        <Typography fontSize="14px" fontWeight="500" mb={2}>
          {pass.location}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="600px"
          mb={2}
        >
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Price
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.price}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Resort Contact
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.phn}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Email
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.email}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="600px"
          pt={2}
          borderTop="1px solid lightgray"
        >
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Pass type
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.price}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Redeemable nights
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.passtype}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Total redeemable
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.redemmable}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" gap="10px" mt={2} >
            <Box flex={1} >
            <MainButton variant="contained" text="Swap" bgcolor="gray" color="#fff" width="100%" />
            </Box>
            <Box flex={1} >
            <MainButton variant="contained" text="Redeem" bgcolor="orange" color="#fff" width="100%" />
            </Box>
        </Box>
      </Box>

      <PassModal
        pass={pass}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Box>
  );
};

export default SinglePass;

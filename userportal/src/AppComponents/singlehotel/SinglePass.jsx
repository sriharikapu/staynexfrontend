import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import PassModal from "../../components/PassModal";

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
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={2}
        mb={2}
      >
        <Typography variant="h4" fontWeight="700">
          {pass.price}
        </Typography>
        <Typography
          color="lightgray"
          border="1px solid lightgray"
          padding="5px 10px"
          borderRadius="5px"
        >
          {pass.passname}
        </Typography>
      </Box>
      <Box flex={1} width="100%" p={1}>
        <Box
          width="100%"
          border="1px solid lightgray"
          borderRadius="5px"
          padding="11px 40px"
          mb={1}
        >
          <Box
            display="flex"
            alignItems="center"
            borderBottom="1px solid lightgray"
            justifyContent="space-between"
          >
            <Box>
              <Typography fontSize="14px" fontWeight="500" color="lightgray">
                PASS TYPE
              </Typography>
              <Typography fontSize="14px" fontWeight="500">
                {pass.passname}
              </Typography>
            </Box>
            <Typography>{pass.passtype}</Typography>
          </Box>
          <Typography fontSize="14px" fontWeight="500" color="lightgray">
            REDEEMABLE NIGHTS
          </Typography>
          <Typography fontSize="14px" fontWeight="500">
            {pass.passtime}
          </Typography>
          <Typography fontSize="14px" fontWeight="500" color="lightgray" mt={2}>
            PERKS
          </Typography>
          {pass.perks.map((perk) => (
            <Typography>{perk}</Typography>
          ))}
        </Box>
        <Button
          variant="contained"
          color="orange"
          sx={{ color: "#fff", width: "100%", textTransform: 'none' }}
          onClick={() => setOpenModal(true)}
          className="btn"
        >
          <img src="/assets/icons/btnbuy.svg" alt="buy" />
        </Button>
      </Box>

      <PassModal pass={pass} openModal={openModal} setOpenModal={setOpenModal} />
    </Box>
  );
};

export default SinglePass;

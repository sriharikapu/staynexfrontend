import { Box, Typography } from "@mui/material";

const SingleHistory = ({pass}) => {
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
        <Typography variant="h5" fontWeight="700">
          <span style={{color: '#E55735'}} >{pass.total}</span> nights in {pass.name}
        </Typography>
        <Typography fontSize="14px" fontWeight="500" mb={2} color="gray.main">
          {pass.start}
        </Typography>
        <Box display="flex" alignItems="center" gap="20px" >
            <Box>
                <Typography fontWeight="700" color="gray.main" >From</Typography>
                <Typography variant="h5" fontWeight="500" >{pass.from}</Typography>
                <Typography fontWeight="700" >{pass.fromday}</Typography>
            </Box>
            <img src="/assets/staynexproperty/arrow.svg" alt="arrow" />
            <Box>
                <Typography fontWeight="700" color="gray.main" >To</Typography>
                <Typography variant="h5" fontWeight="500" >{pass.to}</Typography>
                <Typography fontWeight="700" >{pass.today}</Typography>
            </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          pt={2}
          borderTop="1px solid lightgray"
        >
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Pass type
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.passname}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
            Remaining night(s)
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.remainingnights}
            </Typography>
          </Box>
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
              Room Type
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.roomtype}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" fontWeight="500" color="lightgray">
              Contact
            </Typography>
            <Typography fontSize="14px" fontWeight="700">
              {pass.phn}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SingleHistory
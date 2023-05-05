import { Box, Stack, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const AnalyticsBox = ({ name, days, nights, fullBox, setFullBox }) => {
  return (
    <Stack>
      <div
        onClick={() => setFullBox(name)}
        className={fullBox === name ? "fullboxtext" : "boxtext"}
      >
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderBottom="1px solid #fff"
          padding="10px 5px"
        >
          <Stack fontSize="18px" fontWeight="700">
            {name}
          </Stack>
          <Stack fontSize="40px" fontWeight="700">
            {days}
          </Stack>
          <Stack fontSize="13px" fontWeight="700">
            {nights}
          </Stack>
        </Stack>
        {fullBox === name && (
          <Box p={1} >
            <Box display="flex" alignItems="center" gap="10px" mb={1} >
              <CheckCircleOutlinedIcon />
              <Typography variant="p" fontSize="12px" >
                7.5% Discounts - Applied to the price before taxes & charges
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="10px" >
              <CheckCircleOutlinedIcon />
              <Typography variant="p" fontSize="12px" >Staking Bonuses = 20%</Typography>
            </Box>
          </Box>
        )}
      </div>
      <div className="v_line"></div>
    </Stack>
  );
};

export default AnalyticsBox;

import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const StayConnected = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      height="99px"
      padding="10px 50px"
      sx={{ background: "#F7F6F5",flexDirection: {xs: 'column', md: 'row'} }}
    >
      <Typography sx={{fontSize: {xs: '18px', sm: '24px'}}} fontWeight="500" >Stay updated on the latest</Typography>
      <Box display="flex" alignItems="center" gap="20px" >
        <div className="socialicon" >
          <img src="/assets/icons/discord.svg" alt="socool" />
          <Typography>DISCORD</Typography>
        </div>
        <div className="socialicon" >
        <img src="/assets/icons/socool.svg" alt="socool" />
          <Typography>SO-COL</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default StayConnected;

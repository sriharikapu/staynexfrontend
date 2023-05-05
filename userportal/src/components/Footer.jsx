import { Box, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";
import Image from "./footerimg.svg"

const Footer = () => {

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

  return (
    <Paper style={styles.paperContainer}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        sx={{ height: "423px", width: '100%' }}
      >
        <Box display="flex" alignItems="center" gap="10px" mt={10} mb={2}>
          <img src="/assets/logowhite.svg" alt="logo" />
          <Typography variant="h5" fontWeight="500" sx={{ color: "#fff" }}>
            staynex
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "10px", sm: "30px" },
          }}
        >
          <Typography fontWeight="500" sx={{ color: "#fff" }}>
            StaynexPass
          </Typography>
          <Typography fontWeight="500" sx={{ color: "#fff" }}>
            StaynexClub
          </Typography>
          <Typography fontWeight="500" sx={{ color: "#fff" }}>
            Become A Hotel Partner
          </Typography>
          <Typography fontWeight="500" sx={{ color: "#fff" }}>
            Global partnerships
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: { xs: "200px", sm: "400px" } }}
        >
          <img src="/assets/socialicons/twitter.svg" alt="icon" />
          <img src="/assets/socialicons/discord.svg" alt="icon" />
          <img src="/assets/socialicons/insta.svg" alt="icon" />
          <img src="/assets/socialicons/youtube.svg" alt="icon" />
          <img src="/assets/socialicons/facebook.svg" alt="icon" />
          <img src="/assets/socialicons/socool.svg" alt="icon" />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          width="100%"
          padding="0 40px"
          mb={4}
        >
          <FormControl>
            <Select
              sx={{
                boxShadow: "none",
                width: "80px",
                color: "#fff",
                fontSize: "14px",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    width: "80px",

                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    width: "80px",

                    border: 0,
                  },
              }}
              value={10}
            >
              <MenuItem value={10}>MYR</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Box display="flex" alignItems="center" gap="10px">
            <Typography fontSize="12px" sx={{ color: "#fff" }}>
              Terms
            </Typography>
            <Typography fontSize="12px" sx={{ color: "#fff" }}>
              Privacy
            </Typography>
          </Box>

          <Typography fontSize="12px" sx={{ color: "#fff" }}>
            © 2023 Staynex
          </Typography>
        </Box>
      </Box>
      </Paper>
  );
};

export default Footer;

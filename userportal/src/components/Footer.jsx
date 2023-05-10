import { Box, FormControl, MenuItem, Paper, Select, Typography } from "@mui/material";

const Footer = () => {

  const styles = {
    paperContainer: {
        backgroundImage: `url("/assets/footerimg.svg")`
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
          <img src="/assets/logowhite.svg" alt="logo" width="116px" />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "10px", sm: "60px" },
          }}
        >
          <Typography fontSize="13px" fontWeight="600" sx={{ color: "#fff" }}>
            StaynexPass
          </Typography>
          <Typography fontSize="13px" fontWeight="600" sx={{ color: "#fff" }}>
            StaynexClub
          </Typography>
          <Typography fontSize="13px" fontWeight="600" sx={{ color: "#fff" }}>
            Become A Hotel Partner
          </Typography>
          <Typography fontSize="13px" fontWeight="600" sx={{ color: "#fff" }}>
            Global partnerships
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: { xs: "200px", sm: "300px" } }}
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
          <Box display="flex" alignItems="center" gap="10px" mt={4} >
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

          
          <Box display="flex" alignItems="center" >
            <img src="/assets/flag.svg" alt="flag" />
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
                    color: '#fff',
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
          </Box>
        </Box>
      </Box>
      </Paper>
  );
};

export default Footer;

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const HeaderViewer = () => {
  const [checkSwitch, setCheckSwitch] = useState(2);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      gap="10px"
      p={4}
    >
      {checkSwitch === 1 && <Box>
        <Typography variant="h4" fontWeight="500" >Beyond the every journey</Typography>
        <Typography fontWeight="500" fontSize="18px" >Discover Switzerland’s best ski resorts and plan the perfect holiday</Typography>
      </Box>}
      {checkSwitch === 2 && <Box>
        <Typography variant="h4" fontWeight="500" >Ski the Swiss Alps this winter</Typography>
        <Typography fontWeight="500" fontSize="18px" >Discover Switzerland’s best ski resorts and plan the perfect holiday</Typography>
      </Box>}
      {checkSwitch === 3 && <Box>
        <Typography variant="h4" fontWeight="500" >Let's Go explore the world</Typography>
        <Typography fontWeight="500" fontSize="18px" >Discover Switzerland’s best ski resorts and plan the perfect holiday</Typography>
      </Box>}
      {checkSwitch === 4 && <Box>
        <Typography variant="h4" fontWeight="500" >Ski the Swiss Alps this winter</Typography>
        <Typography fontWeight="500" fontSize="18px" >Discover Switzerland’s best ski resorts and plan the perfect holiday</Typography>
      </Box>}
      <Box display="flex" gap="2px" alignItems="center">
        <div
          className={checkSwitch === 1 ? "activeswitcher" : "switcher"}
          onClick={() => setCheckSwitch(1)}
        ></div>
        <div
          className={checkSwitch === 2 ? "activeswitcher" : "switcher"}
          onClick={() => setCheckSwitch(2)}
        ></div>
        <div
          className={checkSwitch === 3 ? "activeswitcher" : "switcher"}
          onClick={() => setCheckSwitch(3)}
        ></div>
        <div
          className={checkSwitch === 4 ? "activeswitcher" : "switcher"}
          onClick={() => setCheckSwitch(4)}
        ></div>
      </Box>
    </Box>
  );
};

export default HeaderViewer;

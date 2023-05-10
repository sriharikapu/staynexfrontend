import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import Template from "../components/Template";
import { useState } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { profileTab } from "../constant/profile";
import ProfilePass from "../AppComponents/profile/ProfilePass";
import ProfileRedeem from "../AppComponents/profile/ProfileRedeem";
import ProfileAccount from "../AppComponents/profile/ProfileAccount";

const Profile = () => {
  const [switchTabs, setSwitchTabs] = useState(1);

  return (
    <Template>
      <Box>
        <Box sx={{background: "#fceeea"}} >
        <Box
          sx={{
            padding: { xs: "20px", sm: "30px 120px" },
            flexDirection: { xs: "column", sm: "row" },
            maxWidth: {xs: '1000px',lg: '100%' },
            margin: 'auto'
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
        >
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            sx={{
              flex: 1,
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <img
              src="/assets/userpic.svg"
              alt="profile"
            />
            <Box>
              <Typography fontSize="18px" fontWeight="700">Bruno Fernandez</Typography>
              <Box display="flex" alignItems="center" gap="10px">
                <AccountBalanceWalletOutlinedIcon />
                <Typography fontWeight="500">0xb794f5ea...9579268</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 0.7, width: "100%" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography color="orange.main" fontWeight="700" variant="h6">
                Explorer
              </Typography>
              <Typography fontWeight="500" color="gray.main">
                <span style={{ color: "#000" }}>180</span>/365{" "}
                <small>Nights</small>
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="determinate"
                value={50}
                color="orange"
                sx={{ borderRadius: "5px", height: "7px" }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Typography color="gray.main">NEXT tier: GLOBETROTTER</Typography>
            </Box>
          </Box>
        </Box>
        </Box>

        <Box display="flex" alignItems="center" gap="30px" sx={{padding: { xs: "0", sm: "0px 120px 15px 120px" }, background: '#F7F6F5' }} >
            {profileTab.map((tab) => (
              <div
                key={tab.id}
                style={{
                  padding: "5px",
                  fontWeight: "600",
                  marginTop: "10px",
                  fontSize: '13px',
                  cursor: "pointer",
                  borderBottom: `${
                    switchTabs === tab.id ? "3px solid #E55735" : ""
                  }`,
                }}
                onClick={() => setSwitchTabs(tab.id)}
              >
                {tab.name}
              </div>
            ))}
          </Box>

        <Box sx={{padding: {xs: '0 10px', sm: '0 40px'}, maxWidth: '1000px', margin: 'auto'}} >
          
          {switchTabs === 1 && <ProfilePass />}
          {switchTabs === 2 && <ProfileRedeem />}
          {switchTabs === 3 && <ProfileAccount />}
        </Box>
      </Box>
    </Template>
  );
};

export default Profile;

import {
  AppBar,
  Box,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MainButton } from "./Buttons";
import WalletModal from "../AppComponents/homecomponents/WalletModal";
import MessageModal from "../AppComponents/homecomponents/MessageModal";

const settings = [
  {id:1,name:"StaynexPass",path: '/staynexpass'},
  {id:2,name:"StaynexClub", path: '/staynexclub'},
  {id:3,name:"Global partners", path: '/staynexglobal'},
  {id:4,name:"List your property", path: '/staynexproperty'},
];


const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false); 
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" elevation={0} color="white">
      <Toolbar variant="dense">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          sx={{ padding: { xs: "0", sm: "0 50px" } }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Link to="/" className="link" >
            <Box display="flex" alignItems="center" gap={1}>
              <img src="/assets/logo.svg" alt="logo" />
            </Box>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <input
                type="text"
                placeholder="Anywhere"
                className="headerinput"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Link to="/staynexpass" className="link">
              <Typography fontWeight="500" fontSize="12px">
                StaynexPass
              </Typography>
            </Link>
            <Link to="/staynexclub" className="link">
              <Typography fontWeight="500" fontSize="12px">
                StaynexClub
              </Typography>
            </Link>
            <Link to="/staynexglobal" className="link">
              <Typography fontWeight="500" fontSize="12px">
                Global partners
              </Typography>
            </Link>
            <Link to="/staynexproperty" className="link">
              <Typography fontWeight="500" fontSize="12px">
                List your property
              </Typography>
            </Link>
            <FormControl>
              <Select
                sx={{
                  boxShadow: "none",
                  width: "80px",
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
            <MainButton
              text="Connect Wallet"
              variant="contained"
              bgcolor="orange"
              color="#fff"
              // onClick={() => setOpenModal(true)}
              onClick={() => navigate("/user_profile")}
            />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={(e) => setAnchorElUser(e.currentTarget)}
                  sx={{ p: 0 }}
                >
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={(e) => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.id}
                    onClick={() => navigate(setting.path)}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
        </Box>
        <WalletModal setMessageModal={setMessageModal} openModal={openModal} setOpenModal={setOpenModal} />
        <MessageModal openModal={messageModal} setOpenModal={setMessageModal} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

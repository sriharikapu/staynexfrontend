import { Box, FormControl, IconButton, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import SinglePass from "./SinglePass";
import CollapsableFilter from "../searchcomponents/CollapsableFilter";
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { makeStyles } from "@mui/styles";
import { profilehistory } from "../../constant/profile";
import SingleHistory from "./SingleHistory";
const ProfileRedeem = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const useStyles = makeStyles({
    root: {
      "& .MuiInputBase-root": {
        padding: 0,
        "& .MuiButtonBase-root": {
          paddingRight: 15,
          paddingLeft: 10,
        },
        "& .MuiInputBase-input": {
          padding: "2px 30px",
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
  });

  const classes = useStyles();

  return (
    <Box mt={2} >
      <Typography variant="h5" fontWeight="700" >Your Staynex Passes</Typography>
      <Box
            display="flex"
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
            width="100%"
          >
            <IconButton
              onClick={() => setOpenDrawer(true)}
            >
              <TuneIcon />
            </IconButton>
            <FormControl className={classes.root}>
              <Select
                value={10}
                color="orange"
                IconComponent={() => <FilterAltIcon />}
              >
                <MenuItem value={10}>Sort by: Our top picks</MenuItem>
                <MenuItem value={20}>Sort by: Most popular</MenuItem>
                <MenuItem value={30}>Sort by: Price (lowest first)</MenuItem>
              </Select>
            </FormControl>

            <CollapsableFilter
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          </Box>
      <Box display="flex" flexDirection="column" gap="20px" mt={2}>
        {profilehistory.map((pass) => (
          <SingleHistory pass={pass} />
        ))}
      </Box>
    </Box>
  )
}

export default ProfileRedeem
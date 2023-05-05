import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FilterSection from "../AppComponents/searchcomponents/FilterSection";
import ComponentSection from "../AppComponents/searchcomponents/ComponentSection";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TuneIcon from "@mui/icons-material/Tune";
import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";
import CollapsableFilter from "../AppComponents/searchcomponents/CollapsableFilter";
import Template from "../components/Template";

const SearchResults = () => {
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
    <Template>
      <>
        <Box
          display="flex"
          alignItems="center"
          height="110px"
          justifyContent="space-between"
          sx={{
            background: "#EAE2DB",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "5px 0", md: "0 10%" },
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight="700">
              Showing results for ‘Bali, Indonesia’
            </Typography>
            <Typography fontSize="14px" fontWeight="500">
              Over 500 properties
            </Typography>
          </Box>

          <Box>
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="searchInput"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          flexDirection="column"
          mt={2}
          gap="20px"
          sx={{ padding: { xs: "10px", md: "10px 10%" } }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{ justifyContent: { xs: "space-between", md: "flex-end" } }}
            width="100%"
          >
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
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
          <Box display="flex" alignItems="start" gap="20px">
            <FilterSection />
            <ComponentSection />
          </Box>
        </Box>
        <Footer />
      </>
    </Template>
  );
};

export default SearchResults;

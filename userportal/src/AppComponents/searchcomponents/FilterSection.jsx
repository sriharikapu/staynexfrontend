import {
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const FilterSection = () => {
  const [value, setValue] = useState([20, 567]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          outline: '1px solid #000'
        },
      },
    },
  });

  const classes = useStyles();
  return (
    <Box width="350px" p={2} border="1px solid lightgray" borderRadius="10px" sx={{display: {xs: 'none', md: 'block'}}} >
      <Box pb={1} borderBottom="1px solid lightgray">
        <Typography fontWeight="500">Your search</Typography>
        <Typography variant="h5" fontWeight="500" mt={2} sx={{textDecoration: 'underline solid black'}} >
          Bali, Indonesia
        </Typography>
        <Typography fontWeight="500">33 accomadations</Typography>
      </Box>

      <Box
        mt={2}
        pb={2}
        sx={{ width: "100%" }}
        borderBottom="1px solid lightgray"
      >
        <Typography fontSize="14px" fontWeight="700" sx={{ color: "#000" }}>
          Price range
        </Typography>
        <Slider
          max={1000}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          color="gray"
        />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography>Min</Typography>
            <Typography
              padding="0px 5px"
              border="1px solid gray"
              borderRadius="3px"
            >{`$${value[0]}`}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography>Max</Typography>
            <Typography
              padding="0px 5px"
              border="1px solid gray"
              borderRadius="3px"
            >{`$${value[1]}`}</Typography>
          </Box>
        </Box>
      </Box>

      <Box borderBottom="1px solid lightgray" mt={2}>
        <Typography fontSize="14px" fontWeight="700" sx={{color: '#000'}} >Property Type</Typography>
        <Box display="flex" alignItems="center" mb={-2}>
          <Checkbox color="orange" />
          <Typography fontSize="14px" fontWeight="500">
            Resorts
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={-2}>
          <Checkbox color="orange" />
          <Typography fontSize="14px" fontWeight="500">
            Hotels
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={-2}>
          <Checkbox color="orange" />
          <Typography fontSize="14px" fontWeight="500">
            Villas & mansions
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox color="orange" />
          <Typography fontSize="14px" fontWeight="500">
            Boutique hotels
          </Typography>
        </Box>
      </Box>

      <Box mt={2} pb={2} borderBottom="1px solid lightgray">
        <Typography fontSize="14px" fontWeight="700" sx={{ color: "#000" }} mb={1} >
          No of rooms
        </Typography>
        <FormControl className={classes.root} fullWidth>
          <Select value={20} color="orange">
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={1} pb={2} borderBottom="1px solid lightgray">
        <Typography fontSize="14px" fontWeight="700" sx={{ color: "#000" }} mb={1}>
          Unit size
        </Typography>
        <FormControl className={classes.root} fullWidth>
          <Select value={10} color="orange">
            <MenuItem value={10}>{">2500sqft"}</MenuItem>
            <MenuItem value={20}>{">1200sqft"}</MenuItem>
            <MenuItem value={30}>{">1500sqft"}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={2} pb={2}>
        <Typography fontSize="14px" fontWeight="700" sx={{ color: "#000" }} mb={1} >
          Number of nights
        </Typography>
        <FormControl className={classes.root} fullWidth>
          <Select value={10} color="orange">
            <MenuItem value={10}>{">900sqft"}</MenuItem>
            <MenuItem value={20}>{">1200sqft"}</MenuItem>
            <MenuItem value={30}>{">1500sqft"}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FilterSection;

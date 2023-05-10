import { Box, Button, Checkbox, FormControl, MenuItem, Select, Slider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useState } from "react";
import SearchModal from "./SearchModal";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const HeaderSearch = ({openModal, setOpenModal}) => {
  const [value, setValue] = useState([20, 567]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      position="absolute"
      gap="10px"
      sx={{
        background: "#fff",
        padding: "5px 10px",
        borderRadius: "5px",
        top: {xs: '65%', sm: '70%'},
        left: "25px",
        width: {xs: '90%', md: '55%'},
        border: '1px solid lightgray'
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" gap="5px" >
        <Box width="100%" >
        <Box width="100%">
          <input placeholder="Search anywhere" className="searchinput" />
        </Box>
        <Box display="flex" alignItems="center" gap="20px" mt={1} >
          <div className="searchfiltericon" onClick={(e) => {
            e.stopPropagation()
            setOpenModal(!openModal)}} >
            <HomeIcon sx={{fontSize: '14px'}} />
            <Typography fontSize="10px" >Villas</Typography>
          </div>

          <div className="searchfiltericon" onClick={(e) => {
            e.stopPropagation()
            setOpenModal(!openModal)}} >
            <HotelIcon sx={{fontSize: '14px'}} />
            <Typography fontSize="10px" >Villas</Typography>
          </div>

          <div className="searchfiltericon" onClick={(e) => {
            e.stopPropagation()
            setOpenModal(!openModal)}} >
            <SquareFootIcon sx={{fontSize: '14px'}} />
            <Typography fontSize="10px" >Villas</Typography>
          </div>

          <div className="searchfiltericon" onClick={(e) => {
            e.stopPropagation()
            setOpenModal(!openModal)}} >
            <LocalOfferIcon sx={{fontSize: '14px'}} />
            <Typography fontSize="10px" >Villas</Typography>
          </div>

          <SearchModal setOpenModal={setOpenModal} />
        </Box>
        </Box>

        <Box>
        <Button
          color="orange"
          variant="contained"
          sx={{ color: "#fff", padding: "15px 0" }}
          onClick={() => navigate("/search_result")}
        >
          {" "}
          <SearchIcon sx={{fontSize: '30px'}} />{" "}
        </Button>
        </Box>
      </Box>


      {openModal && 
        <div className="confirmmodal" style={{width: '100%', marginTop: '10px'}} >
            <Box borderBottom="1px solid lightgray" mb={2} >
              <Typography fontSize="14px" fontWeight="500" >Property Type</Typography>
              <Box display="flex" alignItems="center" mb={-2}>
                <Checkbox  color="orange" />
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
              <Typography fontSize="14px" fontWeight="500" sx={{ color: "rgba(0, 0, 0, 0.75)" }} mb={1} >
                No of rooms
              </Typography>
              <FormControl className={classes.root} fullWidth>
                <Select value={10} color="orange">
                  <MenuItem value={10}>One</MenuItem>
                  <MenuItem value={20}>Two</MenuItem>
                  <MenuItem value={30}>Three</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box mt={2} pb={2} borderBottom="1px solid lightgray">
              <Typography fontSize="14px" fontWeight="500" sx={{ color: "rgba(0, 0, 0, 0.75)" }} mb={1} >
                Unit size
              </Typography>
              <FormControl className={classes.root} fullWidth>
                <Select value={10} color="orange">
                  <MenuItem value={10}>{">900sqft"}</MenuItem>
                  <MenuItem value={20}>{">1200sqft"}</MenuItem>
                  <MenuItem value={30}>{">1500sqft"}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box mt={2} sx={{ width: "100%" }}>
              <Typography fontSize="14px" fontWeight="500" sx={{ color: "rgba(0, 0, 0, 0.75)" }} mb={1} >
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>Min</Typography>
                  <Typography
                    padding="2px 10px"
                    border="1px solid gray"
                    borderRadius="3px"
                  >{`$${value[0]}`}</Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography>Max</Typography>
                  <Typography
                    padding="2px 10px"
                    border="1px solid gray"
                    borderRadius="3px"
                  >{`$${value[1]}`}</Typography>
                </Box>
              </Box>
            </Box>
        </div>
    }
    </Box>

    

  );
};

export default HeaderSearch;

import {
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Modal,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useState } from "react";
import { MainButton } from "../../components/Buttons";

const SearchModal = ({ openModal, setOpenModal }) => {
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
        },
      },
    },
  });

  const classes = useStyles();

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="confirmmodalContainer">
        <div className="confirmmodal">
          <div onClick={() => setOpenModal(false)}>
            <CancelOutlinedIcon
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "lightgray",
              }}
            />
          </div>
          <Box p={2}>
            <Box borderBottom="1px solid lightgray">
              <Typography fontSize="14px">Property Type</Typography>
              <Box display="flex" alignItems="center" mb={-2}>
                <Checkbox defaultChecked color="orange" />
                <Typography fontSize="14px" fontWeight="500">
                  Resorts
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={-2}>
                <Checkbox defaultChecked color="orange" />
                <Typography fontSize="14px" fontWeight="500">
                  Hotels
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={-2}>
                <Checkbox defaultChecked color="orange" />
                <Typography fontSize="14px" fontWeight="500">
                  Villas & mansions
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox defaultChecked color="orange" />
                <Typography fontSize="14px" fontWeight="500">
                  Boutique hotels
                </Typography>
              </Box>
            </Box>

            <Box mt={1} pb={1} borderBottom="1px solid lightgray">
              <Typography fontSize="14px" sx={{ color: "gray.main" }}>
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

            <Box mt={1} pb={1} borderBottom="1px solid lightgray">
              <Typography fontSize="14px" sx={{ color: "gray.main" }}>
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

            <Box mt={1} sx={{ width: "100%" }}>
              <Typography fontSize="14px" sx={{ color: "gray.main" }}>
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
              <Box display="flex" alignItems="center" justifyContent="center" >
                <MainButton
                  text="Apply"
                  color="#fff"
                  bgcolor="orange"
                  variant="contained"
                  onClick={() => setOpenModal(false)}
                />
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;

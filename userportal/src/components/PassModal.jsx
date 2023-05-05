import { Box, Button, Modal, Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const PassModal = ({ openModal, setOpenModal, pass }) => {

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="confirmmodalContainer">
        <div className="passmodal">
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

          <Box display="flex" alignItems="center" height="400px">
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="10px 0 0 10px"
              sx={{ background: "#EAE2DB", height: "100%" }}
            >
              <img src={pass.src} alt="pass" />
            </Box>
            <Box flex={2} padding="20px 0 0 40px">
              <Typography fontWeight="500">You’re viewing</Typography>
              <Typography variant="h5" fontWeight="700" mt={2}>
                {pass.name}
              </Typography>
              <Typography variant="h5" fontWeight="700">
                {pass.passname}
              </Typography>
              <Typography fontSize="14px" fontWeight="500" mt={2}>
                No of passes
              </Typography>
              <input type="number" className="passvalue" />
              <Typography fontSize="14px" fontWeight="500" mt={2}>
                Type of pass
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                gap="10px"
              >
                <Button variant="outlined" color="black">
                  SP3
                </Button>
                <Button variant="outlined" color="black">
                  SP7
                </Button>
                <Button variant="outlined" color="black">
                  SP14
                </Button>
                <Button variant="outlined" color="black">
                  SP28
                </Button>
              </Box>

              <Button
                variant="contained"
                color="orange"
                sx={{ color: "#fff", marginTop: "10px" }}
                onClick={() => setOpenModal(false)}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default PassModal;

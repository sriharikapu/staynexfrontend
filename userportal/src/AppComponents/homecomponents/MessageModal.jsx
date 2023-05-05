import { Box, Modal, Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { MainButton } from "../../components/Buttons";
import { useState } from "react";

const MessageModal = ({ openModal, setOpenModal }) => {
    const [disable, setDisable] = useState(false);
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

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mt={2}
            p={6}
          >
            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: "50px" }} />
            <Typography variant="h5" fontWeight="500">
              Sign the message in your wallet to continue
            </Typography>
            <Typography variant="p">
              Foundation uses their signature to verify that you’re the owner of
              this BNB address
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              width="100%"
              mt={2}
            >
              <MainButton
                variant="contained"
                bgcolor="orange"
                color="#fff"
                width="90%"
                text={disable ? "Sign message in wallet..." : "Continue"}
                disable={disable}
                onClick={() => setDisable(true)}
              />
              <MainButton
                variant="contained"
                bgcolor="blue"
                width="90%"
                color="#fff"
                text="Disconnect"
                onClick={() => setOpenModal(false)}
              />
            </Box>
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;

import { Box, Button, Modal, Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { MainButton } from "../../components/Buttons";

const WalletModal = ({ openModal, setOpenModal, setMessageModal }) => {
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
              Connect your wallet
            </Typography>
            <Typography variant="p">
              By connecting your wallet, you agree to our terms of service and
              our privacy policy.
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
                text="BNB Chain"
                onClick={() => {
                    setOpenModal(false)
                    setMessageModal(true)
                }}
              />
              <MainButton
                variant="contained"
                bgcolor="blue"
                width="90%"
                color="#fff"
                text="Connect Wallet"
                onClick={() => {
                    setOpenModal(false)
                    setMessageModal(true)
                }}
              />
            </Box>
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;

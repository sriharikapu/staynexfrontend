import { Box, IconButton, Modal } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { allhotelimage } from "../../constant/singlehotel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const GalleryModal = ({ openModal, setOpenModal }) => {
  const [singleImage, setSingleImage] = useState(false);
  const [sliderNumber, setSliderNumber] = useState("0");

  const handleMove = (d) => {
    if (d === "l") {
      sliderNumber === 0
        ? setSliderNumber(5)
        : setSliderNumber(sliderNumber - 1);
    } else if (d === "r") {
      sliderNumber === 5
        ? setSliderNumber(0)
        : setSliderNumber(sliderNumber + 1);
    }
  };

  return (
    <>
      <Modal
        open={openModal}
        sx={{ zIndex: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="confirmmodalContainer">
          <div className="confirmmodal" style={{ width: "800px" }}>
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

            <Box display="flex" flexWrap="wrap" gap="20px" p={4}>
              {allhotelimage.map((img) => (
                <img
                  src={img.src}
                  alt="hotel"
                  className="singleImage"
                  onClick={() => {
                    setSliderNumber(img.id - 1);
                    setSingleImage(true);
                  }}
                />
              ))}
            </Box>
          </div>
        </div>
      </Modal>
      {singleImage && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          sx={{ background: "#f1f1f1", zIndex: 99999 }}
        >
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={() => setSingleImage(false)}
          >
            <CancelOutlinedIcon />
          </div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <IconButton onClick={() => handleMove("l")}>
              <ChevronLeftIcon />
            </IconButton>
            <div
              style={{
                width: "80%",
                height: {xs: '', sm: '100%'},
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={allhotelimage[sliderNumber].src}
                alt="hotel"
                width="100%"
              />
            </div>
            <IconButton onClick={() => handleMove("r")}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GalleryModal;

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../../constant/singlehotel";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGallery = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ImageList
        sx={{ width: "100%", borderRadius: "10px" }}
        variant="quilted"
        cols={4}
        rowHeight={90}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => setOpenModal(true)}
            />
          </ImageListItem>
        ))}
        <GalleryModal setOpenModal={setOpenModal} openModal={openModal} />
      </ImageList>
    </>
  );
};

export default ImageGallery;

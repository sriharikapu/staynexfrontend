import { Button } from "@mui/material";
import React from "react";

export const MainButton = ({
  text,
  bgcolor,
  variant,
  color,
  width,
  onClick,
  disable
}) => {
  return (
    <Button
      className={bgcolor === 'orange' ? 'btn' : ''}
      color={bgcolor}
      variant={variant}
      sx={{ color: color, width: width, textTransform: 'none' }}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </Button>
  );
};

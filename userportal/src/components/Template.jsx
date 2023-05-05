import React from "react";
import Header from "./Header";

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Template;

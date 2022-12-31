import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div id="colorlib-page">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

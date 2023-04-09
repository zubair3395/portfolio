import React, { useEffect, useState } from "react";
import Footer from "../container/Footer";
import Navbar from "../container/Navbar";

const Layout = ({ children }) => {
  const name = localStorage.getItem("name");
  
  return (
    <>
      {name && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

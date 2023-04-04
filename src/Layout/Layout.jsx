import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import routes from "../config/routes";
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

import React from "react";
import "../../style/landingPage.css";
import Subjects from "./Subjects";
import Profile from "./Profile";
import Contact from "./Contact/Contact";
import About from "./About";
import Project from "./Project";
import { Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <Profile />

      <Subjects />

      <Project />

      <About />

      <Contact />
      <Outlet/>
    </>
  );
};

export default LandingPage;

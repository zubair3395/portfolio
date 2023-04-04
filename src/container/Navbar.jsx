import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import routes from "../config/routes";
import Dropdown from "../components/common/Dropdown";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
            My Portfolio
          </Link>
          <select
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
          >
            <option value="">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to={routes.profile.subject}
              >
                Subjects
              </Link>
            </option>
            <option value="">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to={routes.profile.about}
              >
                About
              </Link>
            </option>
            <option value="">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to={routes.profile.projects}
              >
                Projects
              </Link>
            </option>
            <option value="">
              <Link
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to={routes.profile.contact}
              >
                Contact
              </Link>
            </option>
          </select>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to={routes.profile.subject}
                >
                  Subjects
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to={routes.profile.projects}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to={routes.profile.about}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to={routes.profile.contact}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <p className=" mt-2 px-0 px-lg-3 rounded">
                  <Dropdown />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

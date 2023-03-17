import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/routes";
import appDetail from "../constants/appDetail";
import portfolio from "../assests/images/portfolio.png";
import Dropdown from "../components/common/Dropdown";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to={routes.default.path}>
            <img
              src={portfolio}
              alt=""
              style={{ width: "150px", height: "50px" }}
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active mx-5"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
                to={routes.projects.appDetail}
              >
                {appDetail.length} Projects
              </Link>

              <Link
                className="nav-link dropdown active mx-3"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                <div
                  className=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  JavaScript
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={routes.subjects.javaScript}
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        fontFamily: "sans-serif",
                      }}
                    >
                      JavaScript
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={routes.subjects.arrayJavaScript}
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Array JavaScript
                    </Link>
                  </li>
                </ul>
              </Link>
              <Link
                className="nav-link active mx-3"
                to={routes.subjects.html}
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                HTML
              </Link>
              <Link
                className="nav-link active mx-3"
                to={routes.subjects.reactjs}
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                React js
              </Link>
            </div>
          </div>
        </div>
        <Dropdown/>
      </nav>
    </>
  );
};

export default Navbar;

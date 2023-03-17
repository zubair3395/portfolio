import React from "react";
import { useNavigate, Link } from "react-router-dom";
import routes from "../../../config/routes";

export default function NavbarShopping({ count }) {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate(routes?.projects?.addCart);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={routes?.shopping}>
            E-commerece
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={routes.default.path}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                disabled={!count}
                className="btn btn-outline-success"
                type="button"
                onClick={handleCart}
              >
                Cart Item- {count}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

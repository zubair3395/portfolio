import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../config/routes";

const Dropdown = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const handleDropDown = () => {
    if (!display) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const name = localStorage.getItem("name");
  const handleClear = () => {
    localStorage.clear();
    navigate(routes?.authentication?.login);
  };
  return (
    <>
      <div class="dropdown" style={{marginRight: "80px"}}>
        <button
          class="btn dropdown-toggle fw-bold"
          type="button"
          onClick={handleDropDown}
        >
          Profile
        </button>
        {display ? (
          <ul
            class="dropdown-men p-2"
            style={{
              background: "white",
              position: "absolute",
              listStyle: "none",
              borderRadius: "10px",
            }}
          >
            <li>
              <p className="dropdown-item">Name:- {name}</p>
            </li>

            <li>
              <a className="dropdown-item" onClick={handleClear}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dropdown;

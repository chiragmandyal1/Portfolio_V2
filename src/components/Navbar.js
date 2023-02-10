import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = (e) => {
  toast("Project's section will be added soon");
};

export default function Navbar() {
  return (
    <div className="main-nav">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: " #060606" }}
      >
        <Toaster />
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="#"
            aria-disabled
            style={{ color: "#68fe9a" }}
          >
            WhySoOpKratos
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
            <span
              className="navbar-toggler-icon"
              style={{ backgroundColor: "#99968f" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "#Fefaf1" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={{ color: "#Fefaf1" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#Fefaf1" }}
                >
                  Resume
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/WhySoOpKratos/Resume/archive/refs/heads/main.zip"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/WhySoOpKratos/Cover-Letter/archive/refs/heads/main.zip"
                    >
                      Cover Letter
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/WhySoOpKratos/Experience_Letter/archive/refs/heads/main.zip"
                    >
                      Experience Letter
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={() => notify()}>
                <a className="nav-link disabled" style={{ color: "#Fefaf1" }}>
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

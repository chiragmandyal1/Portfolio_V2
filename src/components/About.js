import React from "react";
import clgicon from "./images/colg.svg";
import renovus from "./images/renovus.png";
import crosscope from "./images/crosscope.svg";
import Js from "../components/images/Js.png";
import ReactJs from "../components/images/ReactJs.png";
import Git from "../components/images/Git.png";
import NextJs from "../components/images/NextJs.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-education-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-education"
            type="button"
            role="tab"
            aria-controls="v-pills-education"
            aria-selected="true"
            style={{ color: "white" }}
          >
            Education
          </button>
          <button
            className="nav-link"
            id="v-pills-experience-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-experience"
            type="button"
            role="tab"
            aria-controls="v-pills-experience"
            aria-selected="false"
            style={{ color: "white" }}
          >
            Experience
          </button>
          <button
            className="nav-link"
            id="v-pills-skills-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-skills"
            type="button"
            role="tab"
            aria-controls="v-pills-skills"
            aria-selected="false"
            style={{ color: "white" }}
          >
            Skills
          </button>
        </div>
        <div
          className="tab-content"
          id="v-pills-tabContent"
          style={{
            marginTop: "2%",
          }}
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-education"
            role="tabpanel"
            aria-labelledby="v-pills-education-tab"
            tabIndex="0"
            style={{
              marginTop: "2%",
              maxWidth: "100%",
              backgroundColor: "#060606",
              color: "white",
              padding: "2vh",
              borderRadius: "1vh",
            }}
          >
            <image
              src={clgicon}
              className="img-fluid"
              alt="React Image"
              style={{
                padding: "1vh",
                width: "50%",
                backgroundColor: "white",
                borderRadius: "1vh",
              }}
            />

            <span>
              <hr className="dropdown-divider" />
              Uttaranchal University Dehradun
              <hr className="dropdown-divider" />
              Course : B.Tech (2018-2022)
              <hr className="dropdown-divider" />
              State: Uttarakhand
              <hr className="dropdown-divider" />
              Branch:CSE
              <hr className="dropdown-divider" />
              CGPA : 8.07
            </span>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-experience"
            role="tabpanel"
            aria-labelledby="v-pills-experience-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col-sm-6">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      backgroundColor: "#060606",
                      color: "white",
                    }}
                  >
                    <image
                      src={renovus}
                      className="card-img-top"
                      alt="..."
                      style={{
                        marginTop: "2vh",
                        height: "10%",
                        width: "40%",
                        marginLeft: "30%",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">JavaScript Developer</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{
                          backgroundColor: "#060606",
                          color: "white",
                        }}
                      >
                        Sep 2022 - Dec 2022 · (4 months )
                      </li>
                    </ul>
                    <p
                      className="card-text"
                      style={{ textAlign: "start", marginLeft: "1vh" }}
                    >
                      During my Job, I worked there as a JavaScript developer
                      and my work was to build Chrome extensions. I was
                      responsible for the end-to-end functionality of the
                      extension like the UI the background process and their
                      whole working.
                    </p>
                    <div className="card-body">
                      <a href="https://prospectss.com/" className="card-link">
                        <button type="button" className="btn btn-primary">
                          Company Website
                        </button>
                      </a>
                      <a
                        href="https://github.com/WhySoOpKratos/Experience_Letter/archive/refs/heads/main.zip"
                        className="card-link"
                      >
                        <button type="button" className="btn btn-primary">
                          Experience Letter
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      backgroundColor: "#060606",
                      color: "white",
                    }}
                  >
                    <image
                      src={crosscope}
                      className="card-img-top"
                      alt="..."
                      style={{
                        height: "100%",
                        width: "40%",
                        marginLeft: "30%",
                        paddingTop: "2vh",
                        textAlign: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">React Js Developer intern</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{
                          backgroundColor: "#060606",
                          color: "white",
                        }}
                      >
                        Jan 2022 - Apr 2022 · (4 months )
                      </li>
                    </ul>
                    <p
                      className="card-text"
                      style={{ textAlign: "start", marginLeft: "1vh" }}
                    >
                      During my internship, I worked on their ReactJS web
                      application and I was responsible for building end-to-end
                      functionality of the dashboard, login & logout page,
                      Account section, table etc. I was also responsible for
                      integration with the backend using RestAPIs.
                    </p>
                    <div className="card-body">
                      <a href="https://crosscope.com/" className="card-link">
                        <button type="button" className="btn btn-primary">
                          Company Website
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-skills"
            role="tabpanel"
            aria-labelledby="v-pills-skills-tab"
            tabIndex="0"
          >
            <div className="container text-center">
              <div className="row">
                <div className="col-sm">
                  <div className="col">
                    <div className="col-sm-6 text-center">
                      <image
                        src={Js}
                        className="img-fluid"
                        alt="React Image"
                        style={{ width: "70%", alignItems: "center" }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="col"
                        style={{ display: "flex", width: "30%" }}
                      >
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="col">
                    <div className="col-sm-6 text-center">
                      <image
                        src={ReactJs}
                        className="img-fluid"
                        alt="React Image"
                        style={{ width: "70%", alignItems: "center" }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="col"
                        style={{ display: "flex", width: "30%" }}
                      >
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="col">
                    <div className="col-sm-6 text-center">
                      <image
                        src={NextJs}
                        className="img-fluid"
                        alt="React Image"
                        style={{ width: "70%", alignItems: "center" }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="col"
                        style={{ display: "flex", width: "30%" }}
                      >
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="col">
                    <div className="col-sm-6 text-center">
                      <image
                        src={Git}
                        className="img-fluid"
                        alt="React Image"
                        style={{
                          width: "70%",
                          alignItems: "center",
                          maxWidth: "20vh",
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <div
                        className="col"
                        style={{ display: "flex", width: "30%" }}
                      >
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="col-sm">
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="col-sm">
//   <image
//     src={ReactJs}
//     className="img-fluid"
//     alt="React Image"
//     style={{ width: "70%" }}
//   />
// </div>
// <div className="col-sm">
//   <image
//     src={}
//     className="img-fluid"
//     alt="React Image"
//     style={{ width: "70%" }}
//   />
// </div>

import React from "react";
import Layout from "./Layout";
import { HiDownload } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <Layout>
      <div id="colorlib-main">
        <section className="ftco-section">
          <h3 className="text-center">ABOUT</h3>
          <Link
            className="btn btn-dark"
            target="_blank"
            to={
              process.env.PUBLIC_URL + "../assets/resume/Resume_Bharadwaj.pdf"
            }
            style={{
              float: "right",
              borderRadius: "0px",
              color: "#fff",
              backgroundColor: "#000",
            }}
          >
            Resume{" "}
            <IconContext.Provider
              value={{
                color: "#fff",
              }}
            >
              <HiDownload></HiDownload>
            </IconContext.Provider>
            {"  "}
          </Link>
          <br></br>
          <div className="container  mt-4">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      Experience
                      <span className="line"></span>
                    </h4>
                    <h6
                      className="title"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      Genpact, Banglore, India{" "}
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {" "}
                        July 2022 - present
                      </span>
                    </h6>
                    <p>Business Analyst</p>
                    <p className="subtitle">
                      Working on supply chain project. Developing the forecast
                      algorithms in Machine Learning.
                    </p>
                    <hr></hr>
                    <h6
                      className="title"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      LogiQ Dreams, Kerala, India{" "}
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {" "}
                        December 2020 - June 2022
                      </span>
                    </h6>{" "}
                    <p>Junior Data Science Engineer</p>
                    <p className="subtitle">
                      Developed and implemented algorithm for detection and
                      classification problem using deep learning algorithms.
                    </p>
                    <p className="subtitle">
                      Designed pipeline of the whole project of Identification
                      of Electrical Appliances. Created a Visualization for
                      detailed understanding of Power Consumption.
                    </p>
                    <hr></hr>
                    <h6
                      className="title"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      Psquare Groups,Vishakapatnam, India{" "}
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {" "}
                        April 2018 – May 2018
                      </span>
                    </h6>{" "}
                    <p>Software Intern</p>
                    <p className="subtitle">
                      Well versed with life cycle of the software development
                      process.<br></br>Got hands on experience with PHP and SQL
                      development on hotel management software.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      Education
                      <span className="line"></span>
                    </h4>

                    <h6
                      className="title"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      BTech in Computer science engineering,{" "}
                      <span style={{ color: "red", fontSize: "14px" }}>
                        {" "}
                        2015 - 2019
                      </span>
                    </h6>
                    <p>Jawaharlal Nehru Technological University</p>

                    <p className="subtitle"></p>
                    <hr></hr>

                    <h4>
                      Tech Stack
                      <span className="line"></span>
                    </h4>
                    <p>
                      Python, Java, React JS, SQL, MongoDB, Exploratory Data
                      Analysis, Machine Learning, Deep Learning, Computer
                      Vision, NLP
                    </p>
                    <hr></hr>

                    <h4>
                      Certification
                      <span className="line"></span>
                    </h4>
                    <ul>
                      <li>
                        Certified in UiPath Robotic Enterprise Framework.
                        <span>
                          <p>
                            <strong style={{ color: "#000" }}>URL: </strong>
                          </p>
                        </span>
                      </li>
                      <li>
                        Completed Java course in udemey.
                        <span>
                          <p>
                            <strong style={{ color: "#000" }}>URL: </strong>
                          </p>
                        </span>
                      </li>
                      <li>
                        Completed Salesforce certification on Business
                        Administration Specialist.
                        <span>
                          <p>
                            <strong style={{ color: "#000" }}>URL: </strong>
                            https://trailblazer.me/id?uid=bharadwajsathya&cmty=trailhead
                          </p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;

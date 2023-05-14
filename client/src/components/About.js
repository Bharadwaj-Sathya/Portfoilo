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
              <div className="col-md-12 col-lg-12">
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
                    <ul>
                      <li className="subtitle">
                        Experience using machine learning algorithms to optimize
                        inventory levels and forecast demand.
                      </li>
                      <li className="subtitle">
                        Proficient in programming languages such as Python and
                        SQL for data analysis and modelling.{" "}
                      </li>
                      <li className="subtitle">
                        {" "}
                        Collaborated with cross-functional teams, including
                        procurement, logistics, and operations, to drive process
                        improvements and cost savings.{" "}
                      </li>
                      <li className="subtitle">
                        {" "}
                        Solid understanding of supply chain concepts, including
                        demand forecasting, transportation management, and
                        inventory control.
                      </li>
                      <li className="subtitle">
                        Passionate about utilizing skills in machine learning
                        and programming to drive process improvements and cost
                        savings in the supply chain.{" "}
                      </li>
                      <li className="subtitle">
                        Proven ability to effectively communicate data-driven
                        insights to non-technical stakeholders to drive business
                        decisions.
                      </li>
                    </ul>
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
                    <ul>
                      <li>
                        Experienced data science engineering focusing on
                        identifying electrical appliances using machine learning
                        techniques.
                      </li>
                      <li>
                        {" "}
                        Proficient in data pre-processing, feature extraction,
                        and model training using Python and various machine
                        learning libraries such as sci-kit-learn and TensorFlow.
                      </li>
                      <li>
                        {" "}
                        Developed and deployed models for identifying electrical
                        appliances based on their power consumption and other
                        features using techniques such as decision trees, random
                        forests, and neural networks.
                      </li>
                      <li>
                        {" "}
                        Conducted extensive data analysis to identify patterns
                        and correlations in electrical appliance usage, leading
                        to insights that can be used for energy efficiency and
                        cost savings.
                      </li>
                      <li>
                        {" "}
                        Collaborated with cross-functional teams, including
                        product development, engineering, and business
                        development, to translate insights from data analysis
                        into actionable business strategies.
                      </li>
                      <li>
                        {" "}
                        Experience in data collection and pre-processing using
                        IoT sensors and other data collection methods.
                      </li>
                    </ul>
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
                    <ul>
                      <li>
                        Proficient in web development technologies such as HTML,
                        CSS, JavaScript, and PHP.
                      </li>
                      <li>
                        Developed and maintained websites and web applications.
                        Experience in database design and development, including
                        SQL.
                      </li>
                      <li>
                        {" "}
                        Familiarity with version control systems such as Git for
                        code management and collaboration.
                      </li>
                      <li>
                        {" "}
                        Worked on various aspects of web development including
                        front-end development and back-end development.
                      </li>
                      <li>
                        {" "}
                        Collaborated with cross-functional teams, including
                        product development, UI/UX design, and quality
                        assurance, to deliver high-quality web applications.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-12 mt-4">
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
                            <strong style={{ color: "#000" }}>
                              URL: <a href=""></a>
                            </strong>
                          </p>
                        </span>
                      </li>
                      <li>
                        Completed Java course in udemey.
                        <span>
                          <p>
                            <strong style={{ color: "#000" }}>URL: </strong>
                            <a href="">
                              https://www.udemy.com/certificate/UC-5ZOTC3NU/
                            </a>
                          </p>
                        </span>
                      </li>
                      <li>
                        Completed Salesforce certification on Business
                        Administration Specialist.
                        <span>
                          <p>
                            <strong style={{ color: "#000" }}>URL: </strong>
                            <a href="">
                              https://trailblazer.me/id?uid=bharadwajsathya&cmty=trailhead
                            </a>
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

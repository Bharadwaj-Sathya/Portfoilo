import React from "react";
import "./assets/css/style.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div
        id="colorlib-main"
        style={{
          height: window.innerHeight,
        }}
      >
        {/* <div class="overlay"></div> */}
        <div class="hero-wrap js-fullheight bg">
          <section className="ftco-section">
            <div class="js-fullheight d-flex justify-content-center align-items-center">
              <div class="col-md-8 text text-center">
                <div class="desc" style={{ paddingTop: "10%" }}>
                  <h2 class="subheading">Hello I'm</h2>
                  <h1 class="mb-4">
                    <strong>BHARADWAJ SATHYA</strong>
                  </h1>
                  <p class="mb-4">
                    Analytical, consistent, and enthusiastic data-drive
                    professional with over 2+ years of valuable experience with
                    proficiency in machine learning & statistical modeling
                    algorithms. Expertise in conducting end-to-end lifecycle
                    analysis including data gathering, cleansing, &
                    recommendations to optimize performance. I am passionate
                    about building and applying algorithms to solve real-world
                    industry problems.
                  </p>
                  <ul class="ftco-social mt-3">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/SathyaBharadwaz"
                      >
                        <IconContext.Provider
                          value={{
                            color: "#000",
                            className: "global-class-name",
                            size: "1.2em",
                          }}
                        >
                          <FaTwitter></FaTwitter>
                        </IconContext.Provider>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/Bharadwaj-Sathya"
                      >
                        <IconContext.Provider
                          value={{
                            color: "#000",
                            className: "global-class-name",
                            size: "1.2em",
                          }}
                        >
                          <FaGithub></FaGithub>
                        </IconContext.Provider>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="bharadwajinamahanthi@gmail.com"
                      >
                        <IconContext.Provider
                          value={{
                            color: "#000",
                            className: "global-class-name",
                            size: "1.2em",
                          }}
                        >
                          <SiGmail></SiGmail>
                        </IconContext.Provider>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/bharadwaj-i-v-v-s-9b0843153/"
                      >
                        <IconContext.Provider
                          value={{
                            color: "#000",
                            className: "global-class-name",
                            size: "1.2em",
                          }}
                        >
                          <FaLinkedinIn></FaLinkedinIn>
                        </IconContext.Provider>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

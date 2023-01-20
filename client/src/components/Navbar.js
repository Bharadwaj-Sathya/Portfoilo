import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();

  const handleActiveMenu = (params) => {
    if (location.pathname === params) {
      return "colorlib-active";
    } else {
      return "";
    }
  };

  const activeHamMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className={activeMenu ? "offcanvas" : ""}>
      <Link
        to=""
        class={
          activeMenu ? "colorlib-nav-toggle active" : "colorlib-nav-toggle"
        }
        onClick={() => activeHamMenu()}
      >
        <i></i>
      </Link>
      <aside
        id="colorlib-aside"
        role="complementary"
        class="js-fullheight text-center"
      >
        <h1 id="colorlib-logo">
          <Link to="index.html">
            <span style={{ color: "red" }}>{"</"} </span>BHARADWAJ SATHYA
            <span style={{ color: "red" }}> {">"}</span>
          </Link>
        </h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li class={handleActiveMenu("/home")}>
              <Link to="/home">Home</Link>
            </li>
            <li class={handleActiveMenu("/about")}>
              <Link to="/about">About Me</Link>
            </li>
            <li class={handleActiveMenu("/blogs")}>
              <Link to="/blogs">My Works</Link>
            </li>
            <li class={handleActiveMenu("/projects")}>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <div class="colorlib-footer">
          <p>
            Follow Me:
            {/* All rights reserved | This template is made with{" "}
            <i class="icon-heart" aria-hidden="true"></i> by{" "}
            <Link to="www.bharadwajsathya.com">Bharadwaj</Link> */}
          </p>
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/SathyaBharadwaz">
                {" "}
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
              <a target="_blank" href="https://github.com/Bharadwaj-Sathya">
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
              <a target="_blank" href="bharadwajinamahanthi@gmail.com">
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
      </aside>
    </div>
  );
}

export default Navbar;

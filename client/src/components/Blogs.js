import React from "react";
import Layout from "./Layout";
import Cards from "./Projects/Cards";
import Data from "../components/assets/data/Data.json";

const Blogs = () => {
  return (
    <Layout>
      <div id="colorlib-main">
        <section className="ftco-section">
          <h3 className="text-center">MY WORKS</h3>
          <div className="container">
            <h4 className="text-left">
              Blogs <span className="line"></span>
            </h4>
            {Data.map((blog, index) => (
              <Cards
                key={index}
                id={blog.id}
                Image={blog.Image}
                project_name={blog["Project Name"]}
                Type={blog.Type}
                sub_type={blog["Sub Type"]}
                Algorithm={blog.Algorithm}
                date_of_created={blog["Date Of Created"]}
                description={blog.Description}
                github_link={blog.github_link}
                Blog={blog.Blog}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blogs;

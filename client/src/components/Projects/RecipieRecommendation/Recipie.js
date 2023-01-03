import React from "react";
import { Link } from "react-router-dom";
import { FcAddImage } from "react-icons/fc";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { CgMaximize } from "react-icons/cg";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import DataTable from "react-data-table-component";

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 100%;
    height: 200px;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10%;
  }
  .centered-label {
    display: flex;
    align-items: center;
  }
  .circle {
    width: 186px;
    height: 186px;
    border-radius: 10%;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`;

const Recipie = () => {
  const [url, setUrl] = useState("../assets/images/project/Recipie/UPLOAD.PNG");

  const handleFiles = (files) => {
    console.log(files);
    setUrl(files.base64);
  };

  const columns = [
    {
      name: "S.No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Apple",
      year: "Fruit",
    },
    {
      id: 2,
      title: "Bannana",
      year: "Fruit",
    },
    {
      id: 3,
      title: "Carrot",
      year: "vegetables",
    },
    {
      id: 4,
      title: "Tomatoe",
      year: "Vegetable",
    },
    {
      id: 5,
      title: "Avacoda",
      year: "Fruit",
    },
  ];

  return (
    <div id="colorlib-page">
      <h3 className="text-center">Recipe Recommendation System</h3>
      <h6 className="text-center">
        <Link to="/home">Home</Link> | <Link to="/projects">Projects</Link>{" "}
      </h6>
      <div style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-md-4 col-lg-3 mt-4">
            <div className="card">
              <div className="card-body">
                <h4 className="">
                  Upload Image
                  <span className="line"></span>{" "}
                </h4>
                <AvatarInput style={{ top: "5px" }}>
                  <img src={url} alt="Avatar Placeholder" />
                </AvatarInput>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ReactFileReader
                    fileTypes={[".png", ".jpg"]}
                    base64={true}
                    handleFiles={handleFiles}
                  >
                    <FiCamera style={{ width: 30, height: 30 }} />
                  </ReactFileReader>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-4">
            <div className="card">
              <div className="card-body">
                <h4>
                  Object Detection
                  <span className="line"></span>
                </h4>
                <AvatarInput style={{ top: "5px" }}>
                  <img src={url} alt="Avatar Placeholder" />
                </AvatarInput>
                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  handleFiles={handleFiles}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FiCamera style={{ width: 30, height: 30 }} />
                  </div>
                </ReactFileReader>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-6 mt-4">
            <div className="card">
              <div className="card-body">
                <h4>
                  Items<span className="line"></span>
                </h4>
                <DataTable
                  // title="Movie List"
                  columns={columns}
                  data={data}
                  defaultSortFieldId={1}
                />
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 col-lg-3">
            <div className="card">
              <div className="card-body">
                <h4>
                  Required Ingredients
                  <span className="line"></span>
                </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-4" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4>
                  Recommended Recipe's
                  <span className="line"></span>
                </h4>
                <DataTable
                  // title="Movie List"
                  columns={columns}
                  data={data}
                  defaultSortFieldId={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipie;

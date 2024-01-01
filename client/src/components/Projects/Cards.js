import React from "react";
import "./cards.css";

const Cards = ({
  id,
  Image,
  project_name,
  Type,
  sub_type,
  Algorithm,
  date_of_created,
  description,
  github_link,
  Blog,
}) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="preview-card" key={id}>
          <div className="preview-card__wrp">
            <div className="preview-card__item">
              <div className="preview-card__img">
                <img src={Image} alt="" />
              </div>
              <div className="preview-card__content">
                <span className="preview-card__code">{date_of_created}</span>
                <div className="preview-card__title">{project_name}</div>
                <h6>
                  <span className="badge badge-info mt-2">{Type}</span>{" "}
                  <span className="badge badge-warning mt-2">{sub_type}</span>{" "}
                  <span className="badge badge-success mt-2">{Algorithm}</span>
                </h6>
                <div className="preview-card__text">{description} </div>
                <a href={Blog} className="btn btn-secondary">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const NewsItem = (props) => {
  let { title, description, img, newsUrl, author, date, source } = props;

  return (
    <div className="newItem">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-md-start">
          <h5 className="card-title">{title}... </h5>{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1" }}
          >
            {source}
          </span>
          <p className="card-text ">
            {description}...{" "}
            <a className="link" href={`${newsUrl}`} target="_">
              See more
            </a>{" "}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={`${newsUrl}`} target="_" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

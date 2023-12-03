import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, img, newsUrl } = this.props;

    return (
      <div className="newItem">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-md-start">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text ">{description}... <a className="link" href={`${newsUrl}`} target="_">See more</a> </p>
            <a href={`${newsUrl}`} target="_" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

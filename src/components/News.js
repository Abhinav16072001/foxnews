import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static propTypes = {
    prop: PropTypes.func,
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headings</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My news1"
              description="News Info"
              img="https://image.cnbcfm.com/api/v1/image/107335568-1700223936443-gettyimages-1206167854-AFP_1PQ43W.jpeg?v=1700224480&w=1920&h=1080"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My news1"
              description="News Info"
              img="https://image.cnbcfm.com/api/v1/image/107335568-1700223936443-gettyimages-1206167854-AFP_1PQ43W.jpeg?v=1700224480&w=1920&h=1080"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My news1"
              description="News Info"
              img="https://image.cnbcfm.com/api/v1/image/107335568-1700223936443-gettyimages-1206167854-AFP_1PQ43W.jpeg?v=1700224480&w=1920&h=1080"
            />
          </div>
        </div>
      </div>
    );
  }
}

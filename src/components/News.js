import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0529b7bd50dd4e6596cbf39ab52de290";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headings</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "Nothing to show"
                  }
                  newsUrl={element.url}
                  img={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.livelaw.in/h-upload/2023/10/31/501020-tamil-nadu-government-questioning-governors-slow-pace-in-in-assenting-bills-proclaiming-him-as-a-political-rival.jpg"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  parseArticles = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0529b7bd50dd4e6596cbf39ab52de290&pageSize=20&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
    });
    console.log("Current Page: " + this.state.page);
  };

  async componentDidMount() {
    this.parseArticles(this.state.page);
  }

  handlePrevClick = async () => {
    this.setState(
      {
        page: this.state.page - 1,
      },
      () => {
        this.parseArticles(this.state.page);
      }
    );
  };
  handleNextClick = async () => {
    const nextPage = this.state.page + 1;
    if (nextPage > Math.ceil(this.state.totalResults / 20)) {
      return;
    } else {
      this.setState(
        {
          page: nextPage,
        },

        () => {
          this.parseArticles(this.state.page);
        }
      );
    }
  };

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

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

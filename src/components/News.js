import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

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
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0529b7bd50dd4e6596cbf39ab52de290&pageSize=${this.props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // let parsedData = {
    //   articles: [],
    //   totalResults: 0,
    // };
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
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
    if (nextPage > Math.ceil(this.state.totalResults / this.props.pageSize)) {
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
      <div className="container p-0 my-3 text-center">
        <h2>Fox New - Top Headings</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : "Nothing to show"
                    }
                    newsUrl={element.url}
                    img={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://peoplevine.blob.core.windows.net/media/72/e86f3854-ebcf-4025-ae66-220b51f77ec2/image_not_available.png"
                    }
                    author={
                      element.author
                    }
                    date = {
                      element.publishedAt
                    }
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        {this.state.articles.length >= 1 ? (
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
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        ) : (
          <div>
            {
              // Nested if to check if loading is happening
              !this.state.loading && (
                <p className="position-absolute top-50 start-50 translate-middle">
                  No articles to display
                </p>
              )
            }
          </div>
        )}
      </div>
    );
  }
}

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  document.title = "Fox News | " + capitalizeFirstLetter(props.category);

  const parseArticles = async (page) => {
    props.setProgess(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    props.setProgess(50);

    let parsedData = await data.json();
    props.setProgess(70);

    // let parsedData = {
    //   articles: [],
    //   totalResults: 0,
    // };

    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);

    props.setProgess(100);
  };

  useEffect(() => {
    parseArticles(page);
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let response = await fetch(url);
    let parsedData = await response.json();

    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <div className="container p-0 my-3 text-center">
      <h2>Fox New - Top Headings | {capitalizeFirstLetter(props.category)}</h2>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
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
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  apiKey: PropTypes.string.isRequired,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

News.defaultProps = {
  articles: [],
  country: "in",
  pageSize: 6,
  category: "general",
};

export default News;

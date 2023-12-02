import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static propTypes = {
    prop: PropTypes.func,
  };

  articles = [
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title: "'Euphoria' Producer Kevin Turen Died From Acute Heart Failure",
      description:
        'Kevin Turen, famous for producing HBO shows like "Euphoria" and "The Idol," died as a result of multiple heart issues ... TMZ has learned. The producer\'s official cause of death is acute cardiac dysfunction and hypertrophic heart disease ...…\n Permalink',
      url: "https://www.tmz.com/2023/12/02/euphoria-producer-kevin-turen-cause-of-death-heart-failure-disease/",
      urlToImage:
        "https://imagez.tmz.com/image/3a/16by9/2023/12/01/3aed77f231854d16a79009b32610380c_xl.jpg",
      publishedAt: "2023-12-02T08:50:57Z",
      content:
        'Kevin Turen, famous for producing HBO shows like "Euphoria" and "The Idol," died as a result of multiple heart issues ... TMZ has learned.\r\nThe producer\'s official cause of death is acute cardiac dys… [+758 chars]',
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "youtube.com",
      title:
        "Raoul Pal: Coinbase, Tesla, and Solana Hitting it Big #shorts #solana #tesla #coinbase #tech",
      description:
        "GET 3 months of Real Vision for Just $49 https://rvtv.io/463wkrF Elevate your brand with Real Vision. Connect with us at ... #realvision",
      url: "https://biztoc.com/x/7992715c96d02bc9",
      urlToImage: "https://c.biztoc.com/p/7992715c96d02bc9/s.webp",
      publishedAt: "2023-12-02T08:06:20Z",
      content:
        "GET 3 months of Real Vision for Just $49 https://rvtv.io/463wkrF Elevate your brand with Real Vision. Connect with us at ...\r\n#realvision\r\nThis story appeared on youtube.com, .",
    },
    {
      source: {
        id: null,
        name: "Whitecoatinvestor.com",
      },
      author: "Lauren O'Brien",
      title:
        "A Financial Love Letter to My Wife (and the Realities of Living Like a Resident)",
      description:
        "I write a lot about how personal finance applies to my life and profession. But how does living like a resident affect my marriage?\nThe post A Financial Love Letter to My Wife (and the Realities of Living Like a Resident) appeared first on The White Coat Inve…",
      url: "https://www.whitecoatinvestor.com/realities-of-living-like-a-resident/",
      urlToImage:
      "https://images.wsj.net/im-893490/social",
      publishedAt: "2023-12-02T07:30:37Z",
      content:
        "By The Motivated MD, Guest Writer\r\nThere are times in our lives that force us to stop and reflect. If I am being completely honest, I am a very self-reflective person. Recently, I found myself thinki… [+18300 chars]",
    },
  ];

  constructor() {
    super();
    console.log("OK");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headings</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 40)}
                description={element.description.slice(0, 88)}
                newsUrl={element.url}
                img={element.urlToImage}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

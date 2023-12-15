import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgess={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgess={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgess={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgess={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgess={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                category="sports"
              />
            }
          />
          <Route exact path="/about" element={<h1>None</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import AboutUs from "./components/AboutUs";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgess={setProgress}
              apiKey={apiKey}
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
              setProgess={setProgress}
              apiKey={apiKey}
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
              setProgess={setProgress}
              apiKey={apiKey}
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
              setProgess={setProgress}
              apiKey={apiKey}
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
              setProgess={setProgress}
              apiKey={apiKey}
              key="sports"
              category="sports"
            />
          }
        />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

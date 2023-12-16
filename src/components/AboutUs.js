import React from "react";
import logo from "./logo.png"

const AboutUs = () => {
  return (
    <div className="about-container">
    <h2 className="about-title">About Us</h2>
    <img src={logo} alt="Company Logo" className="company-logo" />
    <p className="about-text">
      Welcome to FoxNews! We are committed to providing you with real-time news
      from around the world. Our dedicated team works tirelessly to deliver
      accurate and unbiased information on a wide range of topics.
    </p>
    <p className="about-text">
      At FoxNews, we believe in the power of information and the importance of
      keeping our readers informed. Our mission is to be a reliable source of
      news that you can trust, delivering stories that matter to you.
    </p>
    <p className="about-text">
      Whether it's politics, technology, entertainment, or more, we strive to
      cover diverse stories and offer insights to help you stay connected and
      informed about the world around you.
    </p>
    <p className="about-text">
      Thank you for choosing FoxNews as your source for up-to-date news. We
      appreciate your trust and support.
    </p>
    {/* Additional content or sections can be added here */}
  </div>
  );
};

export default AboutUs;

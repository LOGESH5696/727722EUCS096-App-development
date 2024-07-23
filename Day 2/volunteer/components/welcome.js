import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Welcome.css"; // Import the CSS file using a relative path
import image from "../Asserts/welcomeImage.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="image-container">
        <img src={image} alt="Welcome Image" />
      </div>
      <div className="text-container">
        <h2 className="welcome-text">
          Small actions, big impact. Join our volunteer network!
        </h2>
        <Link to="/" className="get-started-button">
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

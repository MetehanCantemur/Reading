import React from "react";
import "../styles/Home.css";
import BannerImage from "../assets/learn.png";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage}) ` }}
    >
      {/* <div className="order"></div> */}

      <div className="açıklama">
        <h1>Are you ready to learn</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          architecto vel pariatur
        </p>
      </div>
      <div className="but">
        <button>Learn More</button>
      </div>
    </div>
  );
};

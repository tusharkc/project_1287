import React from "react";
import "./styles.css";

function News() {
  return (
    <div className="body">
      <div className="news_heading">
        <h1>LATEST NEWS</h1>
        <p>View All</p>
      </div>

      <div className="news">
        <img
          src="https://images.pexels.com/photos/1299383/pexels-photo-1299383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="news_img"
        />
        <p className="news_title">
          Freight BlackBuck offers fee FASTags to truck owners
        </p>
      </div>
    </div>
  );
}

export default News;

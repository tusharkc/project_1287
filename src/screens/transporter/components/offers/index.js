import React from "react";
import "./styles.css";

function Offers() {
  return (
    <div className="body">
      <div className="offer_heading">
        <h1>OFFERS</h1>
        <p>View All</p>
      </div>

      <div className="offer_container">
        <img src="/images/ad2.png" className="ad" />
        <img src="/images/ad3.png" className="ad" />
      </div>
    </div>
  );
}

export default Offers;

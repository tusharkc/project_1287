import React from "react";
import Trips from "../components/trips";
import "./style.css";

function TripTracking() {
  return (
    <>
      <div>
        <div className="flex-wrapper">
          <div className="img_logo">
            <img
              src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
              className="company_logo"
            />
          </div>

          <h3 className="page_title">Trip Tracking</h3>

          <div className="top-nav-container">
            <img src="/images/icon_search.png" className="nav_icon" />
            <h5>|</h5>
            <img src="/images/ham_menu.png" className="nav_icon ham_menu" />
          </div>
        </div>
      </div>

      <Trips/>
      <Trips/>
    </>
  );
}

export default TripTracking;

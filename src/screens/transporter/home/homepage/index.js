import React from "react";
import BottomNavBar from "../../components/bottomNav";
import News from "../../components/news";
import Offers from "../../components/offers";
import "./styles.css";

function HomePage() {
  return (
    <>
      <div className="flex-wrapper">
        <img
          src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
          className="company_logo"
        />

        <div className="top-nav-container">
          <img src="/images/logo_bilty.png" className="logo" />
          <img src="/images/icon_search.png" className="nav_icon" />
          <h3>|</h3>
          <img src="/images/ham_menu.png" className="nav_icon" />
        </div>
      </div>

      <h1 className="title">YOUR COMPANIES</h1>

      <div className="compaines_container">
        <p>You added 2 compaines in your account</p>
        <div className="company_images-container">
          <img
            src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
            className="added_company"
          />
          <img
            src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
            className="added_company"
          />
          <span className="add_more">
            <p>+</p>
          </span>
        </div>
      </div>

      <Offers />
      <News />
      {/* <BottomNavBar/> */}
    </>
  );
}

export default HomePage;

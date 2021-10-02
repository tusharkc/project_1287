import React from "react";
import { useState, useEffect } from "react";
import DashboardMenu from "../../../components/dashboard-menu";
import BottomNavBar from "../components/bottomNav";
import "./style.css";

function DashboardPage() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 1440;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="body_dashboard">
      <div>
        <div className="flex-wrapper">
          <div className="img_logo">
            <img
              src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
              className="company_logo"
            />
          </div>

          <div className="top-nav-container">
            <img src="/images/icon_search.png" className="nav_icon" />
            <h5>|</h5>
            <img src="/images/ham_menu.png" className="nav_icon ham_menu" />
          </div>
        </div>
      </div>

      <div className="company_container">
        <img
          src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
          className="company_logo-2"
        />
        <span className="company_info_container">
          <h3 className="company_name" style={{ color: "white" }}>
            Jetways Transporter
          </h3>
          <span className="rating_container">
            <img src="/images/icon_star.png" />
            <img src="/images/icon_star.png" />
            <img src="/images/icon_star.png" />
            <img src="/images/icon_star.png" />
            <img src="/images/icon_star.png" />
          </span>
        </span>
      </div>

      <div className="trip_titles">
        <span className="sec_title">
          <p className="trip_status">TRIPS STATUS</p>

          <p className="trip_description">
            Your total <span>800</span> trips till now
          </p>
        </span>

        <p className="view_all">View All</p>
      </div>

      <div
        className="status_container"
        style={{ width: "100vw", justifyContent: "space-around" }}
      >
        <div
          className="status"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="upcoming_numbers">40</h1>
          <p className="status_title">Upcomming</p>
        </div>
        <span className="line">|</span>

        <div
          className="status"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="active_numbers">10</h1>
          <p className="status_title">Active</p>
        </div>
        <span className="line">|</span>
        <div
          className="status"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 className="delivered_numbers">123</h1>
          <p className="status_title">Delivered</p>
        </div>
      </div>

      <h5 className="quick_links">Quick Links</h5>

      <div className="sec_quicklinks">
        <div className="link_container">
          <img src="/images/icon_truck.png" />
          <p className="link_title">Vehicle Enquiry</p>
        </div>
        <span className="line">|</span>
        <div className="link_container">
          <img src="/images/icon_payment-history.png" />
          <p className="link_title">Payment History</p>
        </div>
        <span className="line">|</span>

        <div className="link_container">
          <img src="/images/icon_bilty.png" />
          <p className="link_title">Create Bilty</p>
        </div>
        <span className="line">|</span>
        <div className="link_container">
          <img src="/images/icon_agreement.png" />
          <p className="link_title">Agreements </p>
        </div>
      </div>
      <div className="sec_info">
        <div className="grid_container">
          <div className="grid_item business_enquiry">
            <p className="info_title">BUSINESS ENQUIRY</p>
            <div className="flex_container">
              <p className="info_num">12</p>
              <img src="/images/icon_document.png" className="info_icon" />
            </div>
          </div>

          <div className="grid_item revenue">
            <p className="info_title">REVENUE</p>
            <p className="info_subtitle">This Month</p>
            <div className="flex_container">
              <p className="info_num">120K</p>
              <img src="/images/icon_document.png" className="info_icon" />
            </div>
          </div>

          <div className="grid_item drivers_available">
            <p className="info_title">DRIVERS AVAILABLE</p>
            <p className="info_subtitle">Total Drivers 150</p>
            <div className="flex_container">
              <p className="info_num">15</p>
              <img src="/images/icon_delivery-2.png" className="info_icon" />
            </div>
          </div>

          <div className="grid_item vehicle_available">
            <p className="info_title">VEHICLE AVAILBLE</p>
            <p className="info_subtitle">Total Vehicle</p>
            <div className="flex_container">
              <p className="info_num">15</p>
              <img src="/images/icon_delivery-2.png" className="info_icon" />
              {/* <img src="/images/icon_delivery.png" className="info_icon" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <BottomNavBar/> */}
    </div>
  );
}

export default DashboardPage;

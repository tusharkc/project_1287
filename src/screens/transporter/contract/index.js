import React from "react";
import { useState } from "react";
import "./style.css";
import { Button, ButtonGroup } from "reactstrap";

function Contract() {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <>
      <div className="flex-wrapper">
        <div className="img_logo">
          <img
            src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
            className="company_logo"
          />
        </div>

        <h3 className="page_title">Agreements</h3>

        <div className="top-nav-container">
          <img src="/images/icon_search.png" className="nav_icon" />
          <h5>|</h5>
          <img src="/images/ham_menu.png" className="nav_icon ham_menu" />
        </div>
      </div>

      <div className="button_container">
        <span
          className="background d-flex justify-content-around w-85"
          style={{ backgroundColor: "#33416A" }}
        >
          <Button
            className="m-1"
            size="md"
            style={{ backgroundColor: "#F67B01", fontSize: 16 }}
          >
            One time contract
          </Button>
          <Button
            className="m-1"
            size="md"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#6C7693",
              fontSize: 16,
              whiteSpace: "none",
            }}
          >
            Long term contract
          </Button>
        </span>
      </div>

      <p className="text-start mx-3 mt-n2 paragraph">
        Choose your contract type to see the search options below.
      </p>

      <div className="filter_container d-flex justify-content-around">
        <div className="options_container">
          <img src="/images/icon_sortby.png" className="filter_icon" />

          <span style={{ color: "#6E7895" }}>
            Sort By: <br />
            <p style={{ color: "#ffffff", fontSize: 17 }}>Latest</p>
          </span>
        </div>

        <div className="options_container">
          <img src="/images/setting-lines.png" className="filter_icon" />

          <span style={{ color: "#6E7895" }}>
            Sort By: <br />
            <p style={{ color: "#ffffff", fontSize: 17 }}>Confirmed</p>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="status_container">
          <p className="trn-number">TRN001234</p>

          <p className="status">
            Status<span className="live">: Live</span>
          </p>
        </div>

        <div className="details">
          <div className="logo_img-container">
            <img src="/images/img_pro1.png" />
          </div>
          <div className="company_details">
            <p className="trader_name">Trader Name</p>
            <p className="company_name">Asian Organo</p>
          </div>

          <div className="date_container">
            <p>
              21 <br />
            </p>
            <p>Mar, 2021</p>
          </div>
        </div>
        <div className="location_container">
          <div className="from_location">
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
            <h6 className="from_destination">
              Kota, Rajasthan <br /> Loading
            </h6>
          </div>
          <div className="from_location">
            <h6 className="to_destination">
              Malerkotla
              <br /> Unloading
            </h6>
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
          </div>
        </div>
        <div className="current_status">
          <img src="/images/bar.png" className="bar" />
          <div className="driver_position">
            <p>Driver started the Jouney</p>
            <p className="time_and_date">Feb 20, 2021, 11:00 AM</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="status_container">
          <p className="trn-number">TRN001234</p>

          <p className="status">
            Status<span className="live">: Live</span>
          </p>
        </div>

        <div className="details">
          <div className="logo_img-container">
            <img src="/images/img_pro1.png" />
          </div>
          <div className="company_details">
            <p className="trader_name">Trader Name</p>
            <p className="company_name">Asian Organo</p>
          </div>

          <div className="date_container">
            <p>
              21 <br />
            </p>
            <p>Mar, 2021</p>
          </div>
        </div>
        <div className="location_container">
          <div className="from_location">
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
            <h6 className="from_destination">
              Kota, Rajasthan <br /> Loading
            </h6>
          </div>
          <div className="from_location">
            <h6 className="to_destination">
              Malerkotla
              <br /> Unloading
            </h6>
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
          </div>
        </div>
        <div className="current_status">
          <img src="/images/bar.png" className="bar" />
          <div className="driver_position">
            <p>Driver started the Jouney</p>
            <p className="time_and_date">Feb 20, 2021, 11:00 AM</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="status_container">
          <p className="trn-number">TRN001234</p>

          <p className="status">
            Status<span className="live">: Live</span>
          </p>
        </div>

        <div className="details">
          <div className="logo_img-container">
            <img src="/images/img_pro1.png" />
          </div>
          <div className="company_details">
            <p className="trader_name">Trader Name</p>
            <p className="company_name">Asian Organo</p>
          </div>

          <div className="date_container">
            <p>
              21 <br />
            </p>
            <p>Mar, 2021</p>
          </div>
        </div>
        <div className="location_container">
          <div className="from_location">
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
            <h6 className="from_destination">
              Kota, Rajasthan <br /> Loading
            </h6>
          </div>
          <div className="from_location">
            <h6 className="to_destination">
              Malerkotla
              <br /> Unloading
            </h6>
            <img
              src="/images/icon_location.png"
              className="icon_location"
              style={{ height: 20, width: 20 }}
            />
          </div>
        </div>
        <div className="current_status">
          <img src="/images/bar.png" className="bar" />
          <div className="driver_position">
            <p>Driver started the Jouney</p>
            <p className="time_and_date">Feb 20, 2021, 11:00 AM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract;

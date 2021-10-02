import React from "react";
import "./styles.css";

function Trips() {
  return (
    <>
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

export default Trips;

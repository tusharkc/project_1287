import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function TransporterCreateTrip() {
  return (
    <div className="body-transport-trip">
      <div className="flex-wrapper">
        <div className="img_logo">
          <img
            src="https://seeklogo.com/images/J/jetway-logo-DCA4670BEA-seeklogo.com.png"
            className="company_logo"
          />
        </div>

        <h3 className="page_title">Create a trip</h3>

        <div className="top-nav-container">
          <img src="/images/icon_search.png" className="nav_icon" />
          <h5>|</h5>
          <img src="/images/ham_menu.png" className="nav_icon ham_menu" />
        </div>
      </div>

      <div className="p-2">
        <p className="fw-bolder" style={{ fontSize: 15 }}>
          Contract ID <span style={{ color: "#F67B01" }}>C0001234</span>
          <p className="fw-normal">this is your reference Contract ID</p>
        </p>
        <p className="fs-6" style={{ width: "100vw" }}>
          You can now proceed to create your booking
        </p>
      </div>

      <div className="columner_layout">
        <div className="card-container" style={{ width: "100px" }}>
          <img src="/images/img_pro2.png" />
          <span>
            <p>Mukesh s</p>
            <p>RJ-20-PR-8764</p>
          </span>
        </div>

        <div className="card-container" style={{ width: "100px" }}>
          <img src="/images/img_pro2.png" />
          <span>
            <p>Mukesh s</p>
            <p>RJ-20-PR-8764</p>
          </span>
        </div>

        <div className="card-container" style={{ width: "100px" }}>
          <img src="/images/img_pro2.png" />
          <span>
            <p>Mukesh s</p>
            <p>RJ-20-PR-8764</p>
          </span>
        </div>
      </div>
      <Button color="primary" style={{ display: "flex" }}>
        <div style={{}}>+</div>
        <p>ASSIGN VEHICLE/DRIVER</p>
      </Button>
    </div>
  );
}

export default TransporterCreateTrip;

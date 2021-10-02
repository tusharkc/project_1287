import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src="images/logo_bilty.png" alt="Logo" />
            </Link>
          </div>
          <div className="call d-flex align-items-center  mr-0">
            <span className="pr-3">
              App Support
              <br />
              <strong>1800-000-1234</strong>
            </span>
            <span className="">
              <img src="images/icon_call.png" alt="Call Now" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

export default function DashboardTop() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  console.log({ user });
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="head col-md-12 d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="#">
                <img src="images/logo_bilty.png" />
              </a>
            </div>
            <div className="pagetitle text-uppercase">
              <button
                onClick={() => {
                  history.replace("/");
                  window.localStorage.clear();
                }}
              >
                Logout
              </button>
            </div>
            <div className="rightHead d-flex align-items-center  mr-0">
              <a href="#">
                <img src="images/icon_notification.png" alt="" />
                <span className="newAlert">3</span>
              </a>
              <a href="#" className="mx-4">
                <img src="images/icon_settings.png" alt="" />{" "}
              </a>
              <div className="loggedPro d-flex align-items-center">
                <span className="pr-3">
                  {user.first_name} {user.last_name}
                  <br />
                  <strong>{user.role_name}</strong>
                </span>
                <span className="propic d-flex align-items-center">
                  <img src="images/img_pro1.png" width={35} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

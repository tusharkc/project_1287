import React from "react";

export default function ProfileBox() {
  return (
    <div className="profilebox d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-10  d-flex align-items-center">
            <div className="companylogo">
              <a href="#" className="d-flex align-items-center">
                <img src="images/img_pro1.png" width={67} />
              </a>
            </div>
            <div className="aboutCompany pl-4">
              <h3 className="font-weight-bold m-0">Essar Petroleum</h3>
              <p className="m-0">
                From the Industrial City of Rajasthan, we at Asian Organo
                Industries are pioneers in the manufacture of Stearates and
                Stabilizers in India. Our founder and promoter Mr. Anil Agarwal
                has always been a technology enthusiast. …
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-2 d-flex justify-content-end">
            <div className="rating">
              <div className="rate rate-5">
                <span className="rateno font-weight-bold text-center">5</span>
                <span className="star" />
              </div>
              <span className="yelrate font-weight-bold text-center text-uppercase">
                Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

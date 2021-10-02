import React from "react";
export default function TransporterDetails(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  console.log(props);
  return (
    <div>
      <div className="bg-primary text-white ">
        <div className="d-flex align-items-center">
          <div className="mx-3 my-3">
            <img
              src="https://picsum.photos/100"
              style={{ borderRadius: "50%" }}
              alt="logo"
            />
          </div>
          <div>
            <h5>Jetways Transporter</h5>
            <p>GST Compliance FCM & RCM</p>
          </div>
        </div>
      </div>

      <div className="my-3 w-80 justify-content-center mx-3">
        <h6 className="mb-3">Bio</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          nibh diam, eget pretium ligula aliquet at. Mauris faucibus lorem enim,
          a lobortis sem pretium in. Morbi tincidunt justo vitae iaculis
          interdum. Nullam sollicitudin leo id erat vulputate, sit amet congue
          felis aliquet. Sed finibus sem sed eros rhoncus dictum. Vivamus
          pretium ex mi, sit amet ultrices purus pretium sit amet. Integer
          malesuada vestibulum sem. Etiam condimentum vel leo nec ultricies. Sed
          sollicitudin viverra orci vel convallis. Pellentesque ultrices
          fringilla massa, eget molestie metus molestie id. Nulla ullamcorper
          odio nec diam semper, tincidunt tempus ligula porta.
        </p>

        <hr />
        <h6 className="mb-3">Routes </h6>
        <div className="row">
          <div className="col-6">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <td>Mumbai</td>
                  <td>-</td>
                  <td>Lucknow</td>
                </tr>
                <tr>
                  <td>Nagpur</td>
                  <td>-</td>
                  <td>New Delhi</td>
                </tr>
                <tr>
                  <td>Noida</td>
                  <td>-</td>

                  <td>Gurugram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
        <hr/>
        <h6 className="mb-3">Branches </h6>
        <div className="d-flex">
        <span className="badge mr-3 badge-light">Delhi</span>
        <span className="badge mx-3 badge-light">Kolkata</span>
        <span className="badge mx-3 badge-light">Noida</span>
        <span className="badge mx-3 badge-light">Lucknow</span>
        <span className="badge mx-3 badge-light">Kanpur</span>

        </div>

        <hr/>
        <h6  className="mb-3">Vehicle Type </h6>
        <div className="d-flex">
        <span className="badge mr-3 badge-light">Carrier</span>
        <span className="badge mx-3 badge-light">Cargo</span>
        <span className="badge mx-3 badge-light">Truck</span>
        <span className="badge mx-3 badge-light">Tanker</span>

        </div>
        <hr/>
        <h6  className="mb-3">Goods Type </h6>
        <div className="d-flex">
        <span className="badge mr-3 badge-light">Solid</span>
        <span className="badge mx-3 badge-light">Liquid</span>
        <span className="badge mx-3 badge-light">Gas</span>

        </div>
        <hr/>
        <h6  className="mb-3">Nature of Goods </h6>
        <div className="d-flex">
        <span className="badge mr-3 badge-light">Inflammable</span>

        </div>
      </div>
    </div>
  );
}

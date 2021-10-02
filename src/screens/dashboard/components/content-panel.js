import React, { useEffect } from "react";
import useNews from "../../../hooks/useNews";

export default function ContentPanel() {
  const { data } = useNews();
  useEffect(() => {
    window.Highcharts.chart("container", {
      title: {
        text: "",
      },
      subtitle: {
        text: " ",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: " ",
        },
      },
      plotOptions: {
        series: {
          pointWidth: 55,
        },
      },
      series: [
        {
          type: "column",
          colorByPoint: true,
          data: [
            450000, 300000, 210000, 320000, 300000, 260000, 400000, 300000,
            300000, 230000, 100000, 300000,
          ],
          colors: ["#FB8E00"],

          showInLegend: false,
        },
      ],
    });
  }, []);

  console.log({ data });

  return (
    <div className="contentpanel">
      <div className="container-fluid">
        <div className="row midContent">
          <div className="col-md-6">
            <div className="revenueGraph py-4">
              <h2 className="text-uppercase font-weight-bold">Revenue</h2>
              {/*<img src="images/img_graph.png" alt="" />*/}
              <figure className="highcharts-figure">
                <div id="container" />
              </figure>
            </div>
            <div className="latestNews py-4">
              <h2 className="text-uppercase font-weight-bold">Latest News</h2>
              <ul className="p-0 m-0">
                {data &&
                  data.news.slice(0, 3).map((v) => (
                    <li className="d-flex py-4" key={v.id}>
                      <div className="newImg mr-4">
                        <span>
                          <img src={v.news_image} alt={v.news_image} />
                        </span>
                      </div>
                      <div className="newCont">
                        <h4 className="font-weight-bold mb-1">
                          {v.news_details}
                        </h4>
                        <p>{v.news_details}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 alertsSection py-4">
            <h2 className="text-uppercase font-weight-bold">Alerts</h2>
            <p>You have 5 approaching driver today</p>
            <ul className="p-0 m-0">
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
              <li className="py-3">
                <a className="d-flex align-items-center" href="#">
                  <span className="altImg">
                    <img src="images/img_pro2.png" alt="" width={30} />
                  </span>
                  <span>
                    <strong>Vikas Goel</strong>
                    <br />
                    RJ-20-PR-8764
                  </span>
                  <span className="ml-auto">
                    <img src="images/icon_arrpw.png" alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-md-3 py-4 existOffers d-flex flex-column">
            <h2 className="text-uppercase font-weight-bold">
              Your Existing Offers
            </h2>
            <ul className="p-0 m-0">
              <li className="py-2">
                <img src="images/ad1.png" alt="" />
              </li>
              <li className="py-2">
                <img src="images/ad2.png" alt="" />
              </li>
              <li className="py-2">
                <img src="images/ad3.png" alt="" />
              </li>
            </ul>
            <div className="mt-auto d-flex justify-content-center">
              <a
                href="#"
                className="btn btn-secondary text-uppercase font-weight-bold px-5 py-2 "
              >
                Create Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

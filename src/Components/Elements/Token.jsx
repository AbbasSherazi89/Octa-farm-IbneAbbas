import React from "react";
import GoogleChart from "./GoogleChart";

const Token = () => {
  return (
    <>
      <div className="container-fluid token-fluid py-5">
        <div className="container">
          <div className="row token-details py-5 ">
            <h1 className="fw-bold">Token Allocation</h1>
            <div class="col">
              Ticker<span>OCTF</span>
            </div>
            <div class="col">
              Network<span>BSC</span>
            </div>
            <div class="col">
              Total Fixed Supply<span>10 Million</span>
            </div>
            <div class="col">
              Emission<span>2 Years</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <GoogleChart/>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="assets/app.1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;

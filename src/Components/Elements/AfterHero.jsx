import React from "react";

const AfterHero = () => {
  return (
    <div>
      <div className="container-fluid afterhero-fluid py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5 ">
              <h3 className="overview-h3">
               Invest The Right Way
              </h3>
              <span className="subs">Supercharge Your Returns</span>
              <h2>Save Time &amp; Gas Fees Through Automation</h2>
            </div>
            <div className="col-lg-7">
              <div className="row align-item-center justify-content-center">
                <div className="col-md-5 box p-3">
                  <p className="mb-0 pb-0">
                    <span>Highest Auto</span>
                  </p>
                  <p>Compounding Pools</p>
                  <span className="one">
                    <span className="text-cyan">upto</span>7,000
                    <span className="symbol">%</span>
                  </span>
                  <p className="text-cyan">Annual Percentage Yield</p>
                  <p />
                </div>
                <div className="col-md-4 box p-3">
                  <p className="mb-0 pb-0">
                    <span>Projected </span>
                  </p>
                  <p>Total Value Locked (TVL)</p>
                  <span className="one">
                    <span className="symbol">$</span>
                    <span>538.4</span>
                    <span className="volume">M</span>
                  </span>
                  <p className="text-cyan">Within 6 Months of Launch</p>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHero;

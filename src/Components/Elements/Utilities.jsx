import React from "react";

const Utilities = () => {
  return (
    <>
      <div className="container-fluid utility-fluid py-5">
        <div className="container">
          <div className="row headings">
            <div className="col-md-12">
              <h1>Token Value-Accrual &amp; Utility</h1>
              <h5 >
                OCTF is predicated on a fixed-supply model that is integrated
                with a continual buyback-and-burn mechanism for maximum
                value-accrual and token value sustainability.
              </h5>
            </div>
          </div>
          <div className="row mt-4 mb-2 d-flex align-item-center justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className="utility utility-1">
                <img
                  src="assets/trading-fee.svg"
                alt=""

                  className="svg-icons"
                  width={70}
                />
                <h2>Trading Fee Revenue</h2>
                <h4>Earn higher APYs from DEX trading revenue and OCTF</h4>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="utility utility-1">
                <img
                  src="assets/buy-back.svg"
                alt=""

                  className="svg-icons"
                  width={70}
                />
                <h2>Buy-Back & Burn</h2>
                <h4>Deflationary token supply with inherent buybacks to further reduce supply</h4>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="utility utility-1">
                <img
                  src="assets/staking.b.svg"
                alt=""

                  className="svg-icons"
                  width={70}
                />
                <h2>Staking Rewards</h2>
                <h4>Stake your LP on Octa to get the highest APY in the market</h4>
              </div>
            </div>
          </div>
          <div className="row d-flex align-item-center justify-content-center">
            <div className="col-lg-4 mt-3">
              <div className="utility utility-1">
                <img
                  src="assets/earning.5.svg"
                alt=""

                  className="svg-icons"
                  width={70}
                />
                <h2>Earning Partner Tokens</h2>
                <h4>Earn free partner project tokens on Octafarm</h4>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="utility utility-1">
                <img
                  src="assets/gov.14.svg"
                alt=""
                  className="svg-icons"
                  width={70}
                />
                <h2>Governance</h2>
                <h4>Create and vote on proposals to effect improvements to the</h4>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="utility utility-1">
                <img

                  src="assets/proposal.0.svg"
                alt=""
                  className="svg-icons"
                  width={70}
                />
                <h2>Proposal Submission Staking</h2>
                <h4>Our novel strategy builder requires strategists to stake OCTF.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utilities;

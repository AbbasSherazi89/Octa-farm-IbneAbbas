import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-fluid position-relative py-4" style={{overflow: 'hidden'}}>
      
        <div className="bg_img">
          <img
            className="img-fluid bg_img_front"
            src="assets/front-bg.png"
            alt="Octopus front arrow"
          />
          <img
            className="img-fluid bg_img_middle"
            src="assets/middle-bg.png"
            alt="Octopus middle arrow"
          />
          <img
            className="img-fluid bg_img_back"
            src="assets/back-bg.png"
            alt="Octopus back arrow"
          />
        </div>

        <div className="container">
          <div className="row  d-flex align-items-center">
            <div className="col-lg-6 hero-col1 mt-0 pt-0 mb-3">
              <h1>
                Maximize Staking Returns <br/>
                with Auto-Compounding
              </h1>
              <h3>
                Automate your DeFi reinvestment with Octafarm to compound your
                returns even when you sleep!
              </h3>
              <div className="row">
                <div className="col-lg-8">
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x04d4f38dcdfe976cb325db16b868f0020104014e"
                    className="mt-4 w-100 button btn btn-primary"
                  >
                    Buy on Pancakeswap
                  </a>
                  <p className="mt-4 mb-0 pb-0">
                    <code>
                      Official Contract:
                      0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
                    </code>
                  </p>
                </div>
                <div className="row m-auto">
                  <div className="col col-lg-auto">
                    <a
                      href="https://app.octafarm.fi/#/bsc"
                      className="mt-4 button btn w-100 btn-outline-primary"
                    >
                      Launch App
                    </a>
                  </div>
                  <div className="col col-lg-auto">
                    <a
                      href="https://octafarm.gitbook.io/octafarm-docs/"
                      className="mt-4 button w-100 btn btn-outline-primary"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-col2">
              <iframe
                className="video-frame"
                width="100%"
                height="358px"
                src="https://www.youtube-nocookie.com/embed/2MBH3qpOgPI?controls=0&rel=0"
                title="YouTube video player"
                // frameBorder={0}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          <div className="row media d-flex justify-content-around align-items-center pt-5 pb-1">
            <div className="col-md-4">
              <a href="https://www.digitaljournal.com/pr/octafarm-fi-launches-on-binance-chain-as-the-first-fully-integrated-yield-maximizing-protocol">
                <img
                  src="assets/dj.png"
                  alt=""
                  width={200}
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://finance.yahoo.com/news/octafarm-fi-launches-binance-chain-124200010.html">
                <img
                  src="assets/yf.png"
                  alt=""
                  width={200}
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://www.marketwatch.com/press-release/octafarmfi-launches-on-binance-chain-as-the-first-fully-integrated-yield-maximizing-protocol-2021-12-23">
                <img
                  src="assets/mw.svg"
                  alt=""
                  width={200}
                />
              </a>
            </div>
          </div>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2840"
            height="2"
            viewBox="0 0 2840 2"
            fill="none"
          >
            <path
              d="M-15 1H2855"
              stroke="white"
              stroke-opacity="0.15"
              stroke-linejoin="round"
              stroke-dasharray="1 5"
            ></path>
            <path
              d="M0 1H33"
              stroke="url(#footer_grad)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shoot-right"
            ></path>
            <defs>
              <linearGradient
                id="footer_grad"
                x1="0"
                y1="2"
                x2="33"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="5%" stop-color="#61CDEF" stop-opacity="0"></stop>
                <stop offset="95%" stop-color="#61CDEF"></stop>
              </linearGradient>
            </defs>
          </svg>

          <div className="row media d-flex justify-content-around align-items-center pt-1">
            <div className="col-md-4">
              <a href="https://www.digitaljournal.com/pr/octafarm-fi-launches-on-binance-chain-as-the-first-fully-integrated-yield-maximizing-protocol">
                <img
                  className="img-row1"
                  src="assets/sp.png"
                  alt=""
                  width={200}
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://finance.yahoo.com/news/octafarm-fi-launches-binance-chain-124200010.html">
                <img
                  className="img-row1"
                  src="assets/ct.png"
                  alt=""
                  width={200}
                />
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://www.marketwatch.com/press-release/octafarmfi-launches-on-binance-chain-as-the-first-fully-integrated-yield-maximizing-protocol-2021-12-23">
                <img
                  className="img-row1"
                  src="assets/tr.png"
                  alt=""
                  width={200}
                />
              </a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Hero;

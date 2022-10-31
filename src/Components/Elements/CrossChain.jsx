import React from "react";

const CrossChain = () => {
  return (
    <>
      <div className="container-fluid cross-fluid py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <h3 className="title text-center">Easiest Gateway to</h3>
            <h1 className="text-center">Cross-Chain Yield Farming For All</h1>
            <p className="col-md-8 text-center paragraph-chain">
              Octafarm will be deployed on various blockchain networks so anyone
              can access supercharged yields seamlessly cross-chain, thereby
              maximizing opportunities to access the highest yields.
            </p>
          </div>
        </div>
        <div className="row align-item-center justify-content-center py-5">
          <div className="col-lg-4 networks">
            <div className="bd-highlight-main">
              <div className="bd-highlight">
                <span>Binance</span> &nbsp;
                <img src="assets/BSC.svg" width={50} alt="" />
              </div>
              <div className="bd-highlight">
                <span>Polygon</span> &nbsp;
                <img src="assets/MATIC.svg" width={50} alt="" />
              </div>
              <div className="bd-highlight">
                <span>Moonbeam</span> &nbsp;
                <img src="assets/MOON.svg" width={50} alt="" />
              </div>
              <div className="bd-highlight">
                <span>Avalanche</span> &nbsp;
                <img src="assets/AVAX.svg" width={50} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column align-item-center justify-content-center">
            <div className="octa-process">
              <div className="octa-legs">
                <div className="octa-body">
                  <img src="assets/octopus-img.svg" width={240} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 step3">
            <ul className="list-group">
              <li className="list-group-item">PancakeSwap Vaults</li>
              <li className="list-group-item">QuickSwap Vaults</li>
              <li className="list-group-item">SolarBeam Vaults</li>
              <li className="list-group-item">Trader Joe Vaults</li>
            </ul>
          </div>
          <div className="col-lg-2 step4">
            <ul className="list-group">
              <li className="list-group-item">Auto-Comp. Pools</li>
              <li className="list-group-item">Multi-Dex Strategy</li>
              <li className="list-group-item">Maximizer Pools</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrossChain;

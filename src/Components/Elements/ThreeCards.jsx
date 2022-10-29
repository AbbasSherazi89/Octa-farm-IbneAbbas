import React from "react";

const ThreeCards = () => {
  return (
    <>
      <div className="container-fluid three-fluid py-4">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-3 box p-2">
              <h3 className="text-cyan">Private Sale</h3>
              <p>13th Jan, 2022</p>
              <p className="text-cyan fw-bold">Bonus</p>
              <h1>7%</h1>
              <p className="desc">
                <b>Allocation:</b> 1.5% Tokens
                <br />
                <b>Price:</b> 1 BNB ≈ 691.93 OCTF
              </p>
            </div>

            <div className="col-md-2 box box-mid p-2">
              <h3 className="text-cyan">Pre Sale</h3>
              <p>15th Jan, 2022 @ PinkSale</p>
              <p className="text-cyan fw-bold">Bonus</p>
              <h1>3%</h1>
              <p className="desc">
                <b>Allocation:</b> 10% Tokens
                <br />
                <b>Price:</b> 1 BNB ≈ 666.66 OCTF
              </p>
            </div>

            <div className="col-md-3 box p-2">
              <h3 className="text-cyan mb-2">Listing</h3>
              <p className=" mb-3">PancakeSwap</p>
              <p className="text-cyan fw-bold">Listing Price</p>
              <h1>$0.75</h1>
              <p className="desc">
                <b>Allocation:</b> 5% Tokens
                <br />
                <b>Price:</b> 1 BNB ≈ 646.66 OCTF
              </p>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x04d4f38dcdfe976cb325db16b868f0020104014e"
                className="mb-4 w-50 button btn btn-primary"
              >
                Buy OCTF
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
};

export default ThreeCards;

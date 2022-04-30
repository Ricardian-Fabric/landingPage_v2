import * as React from "react";

export function Roadmap() {
  return (
    <div className="container">
      <div className="main-timeline">
        <div className="timeline">
          <div className="icon"></div>
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">May</span>
                <span className="year">2022</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Mainnet launch</h5>
            <p className="description">
              Ricardian Fabric is officially launched on Harmony Mainnet
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="icon"></div>
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">July</span>
                <span className="year">2022</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">Identity Service</h5>
            <p className="description">
              KYC as a service with Zero-Knowledge proofs. We handle the KYC,
              you verify the proofs within your deployed contracts!
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="icon"></div>
          <div className="date-content">
            <div className="date-outer">
              <span className="date">
                <span className="month">August</span>
                <span className="year">2022</span>
              </span>
            </div>
          </div>
          <div className="timeline-content">
            <h5 className="title">
              Pay for Permaweb pinning with ONE and other tokens!
            </h5>
            <p className="description">
              A Smart Contract and a pinning service will allow us to provide
              permaweb storage payments in any currency!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { sponsers } from "constants";
import React from "react";
import Marquee from "react-fast-marquee";

const SponsersSection = () => {
  return (
    <section className="sponsers-section">
      <Marquee
        gradient={true}
        speed={40}
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
        }}
      >
        <div className="sponsers">
          {sponsers.map((sponser, index) => (
            <div className="sponser">
              <img src={sponser.image} alt={`sponser-${index}`} />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SponsersSection;

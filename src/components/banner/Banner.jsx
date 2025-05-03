import { React, useState, useEffect } from "react";
import "./banner.css";
import CountUp from "react-countup";
import { GiEcology } from "react-icons/gi";
import { co2 } from "@tgwf/co2";

const Banner = () => {
  const [emission, setEmission] = useState(0);

  function getPageWeight() {
    const performance = window.performance.getEntriesByType("resource");
    const transferSize = performance.reduce(
      (acc, cur) => acc + cur.transferSize,
      0
    );
    return transferSize;
  }
  useEffect(() => {
    const swdmV4 = new co2({ model: "swd", version: 4 });

    const handleLoad = () => {
      const pageWeight = getPageWeight();
      const estimate = swdmV4.perVisit(pageWeight);
      console.log("Estimation from pageWeight", estimate.toFixed(3), "g");
      setEmission(estimate.toFixed(3));
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="banner">
      <GiEcology className="banner_number" />
      <div className="banner_number">
        <div id="banner_number" className="banner_number">
          {emission > 0 && (
            <CountUp
              end={emission}
              decimals={2}
              duration={3}
              enableScrollSpy={true}
            />
          )}
        </div>
        <div className="banner_number">g</div>
      </div>
      <div className="banner_number">of CO&sup2;</div>
    </div>
  );
};

export default Banner;

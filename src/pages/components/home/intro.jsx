import React from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <Particles
          params={{
            particles: {
              number: {
                value: window.matchMedia("(min-width: 3840px)").matches
                  ? 1000
                  : window.matchMedia("(min-width: 2560px)").matches
                  ? 500
                  : window.matchMedia("(min-width: 1920px)").matches
                  ? 300
                  : window.matchMedia("(min-width: 1440px)").matches
                  ? 230
                  : window.matchMedia("(min-width: 650px)").matches
                  ? 150
                  : 75,
              },
              size: {
                value: 1,
              },
            },
          }}
          width="100vw"
          height="100vh"
        />
        <div className="intro-content" id="intro">
          <div className="text-intro">
            <h1 className="show-h1">APPLIED BLOCKCHAIN</h1>
            <h1 className="show-h1">FRONTRUNNER</h1>
            <h1 className="show-h1">
              <Typed
                className="text-marquee"
                strings={[
                  "PRIVATE INFRASTRUCTURE",
                  "APPLICATION SYSTEM",
                  "TOKENIZATION OF ASSETS",
                  "ICO/IEO CONSULTANCY",
                  "CRYPTO-EXCHANGE DEV",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </h1>
            <h1 className="show-h1">INNOVATIVELY</h1>
            <h1 className="show-h1">USEFUL</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;

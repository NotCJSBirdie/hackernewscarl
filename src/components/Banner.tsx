import React from "react";
import ResortImage from "../images/Credit-Moshe-Safdie-Architects-1-640x400.png";
import "../sass/Banner.scss";

const Banner = () => {
  return (
    <div id="banner-container">
      <span id="banner-container-left">
        <img id="banner-image" src={ResortImage} />
        <div id="banner-container-left-caption">
          <div style={{ padding: "10px" }}>
            Projects in the works includes guest villas on stilts à la Maldives,
            spits of land reaching into the sea with a large expo dome, plus
            rooms along artificial inlets
          </div>
        </div>
      </span>

      <span id="banner-container-right">
        <div id="banner-container-right-title">Full Coverage</div>
        <div id="banner-container-right-content">
          <div>
            Podcast: Nigerian-American filmmaker takes on Sderot and Gaza
          </div>
          <div>
            By <span id="banner-container-right-author">JESSICA STEINBERG</span>
          </div>
        </div>
        <div id="banner-container-right-content">
          <div>
            Podcast: IPO’s Lahav Shani compares orchestra conducting to film
            direction
          </div>
          <div>
            By <span id="banner-container-right-author">JESSICA STEINBERG</span>
          </div>
        </div>
        <div id="banner-container-right-content">
          <div>
            Podcast: IPO’s Lahav Shani compares orchestra conducting to film
            direction
          </div>
          <div>
            By{" "}
            <span id="banner-container-right-author">AMANDA BORSCHEL-DAN</span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Banner;

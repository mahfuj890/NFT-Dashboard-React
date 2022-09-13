import React from "react";
import Countdown from "../Countdown";
import PageTitle from "../PageTitle";
import ToActionSlider from "../Slider/ToActionSlider";
import SliderArrow from "./SliderArrow";

function ToActionSection() {
  return (
    <div>
      <PageTitle
        text="Top Auction"
        children={
          <SliderArrow
            sliderNextIcon={"top_auction_slider_next_icon"}
            sliderPreviousIcon={"top_auction_slider_prev_icon"}
          />
        }
      />
     
      <div className="slider_area">
        <ToActionSlider />
      </div>
    </div>
  );
}

export default ToActionSection;

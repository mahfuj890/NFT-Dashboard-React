import React from "react";
import PageTitle from "../PageTitle";
import ToActionSlider from "../Slider/ToActionSlider";

function ToActionSection() {
  return (
    <div>
      <PageTitle text="Top Auction" children={<div>this is form div</div>} />
      <div className="slider_area">
        <ToActionSlider />
      </div>
    </div>
  );
}

export default ToActionSection;

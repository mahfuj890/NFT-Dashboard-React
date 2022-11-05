import SliderContext from "../../Context/SliderContext";
import PageTitle from "../PageTitle";
import FeatureNftSlider from "../Slider/FeatureNftSlider";
import SliderArrow from "../Slider/SliderArrow";
import { useContext } from "react";
import SelectComponent from "../SelectComponent";

function FeaturesProductSection() {
  const { filterProductFun } = useContext(SliderContext);

  const options = [
    { value: "all", label: "All" },
    { value: "popular", label: "Popular" },
    { value: "best", label: "Best" },
    { value: "top", label: "Top" },
  ];

  const handleChange = (e) => {
    filterProductFun(e.value);
  };
  return (
    <div className="features_prodcut_area mt-30">
      <PageTitle
        text="Featured NFTs"
        children={
          <div className="d-flex align-items-center flex-wrap-wrap g-lg">
            <SelectComponent options={options} handleChange={handleChange} />
            <SliderArrow
              sliderNextIcon={"features_next_icon"}
              sliderPreviousIcon={"features_prev_icon"}
            />
          </div>
        }
      />

      <FeatureNftSlider />
    </div>
  );
}

export default FeaturesProductSection;

import PageTitle from "../PageTitle";
import FeatureNftSlider from "../Slider/FeatureNftSlider";
import SliderArrow from "../Slider/SliderArrow";

function FeaturesProductSection() {
  return (
    <div className="features_prodcut_area mt-30">
      <PageTitle
        text="Featured NFTs"
        children={
          <div className="d-flex align-items-center flex-wrap-wrap g-lg">
            <select name="" id="">
                <option value="popular">Popular</option>
                <option value="best">Best</option>
                <option value="top">Top</option>
            </select>
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

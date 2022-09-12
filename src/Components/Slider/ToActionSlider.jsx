import { Swiper, SwiperSlide } from "swiper/react";
import topActionSliderData from "../../Data/TopActionSliderData";
import { Link } from "react-router-dom";
function ToActionSlider() {
  return (
    <div className="slider_area">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {topActionSliderData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="slider_grid">
                <div className="slider_img">
                  <img src={data.sliderImg} alt="slider image" />
                </div>
                <div className="slider_content_area">
                  <div className="slider_header d-flex align-items-center justify-content-between flex-wrap-wrap g-sm">
                    <h4>{data.title}</h4>
                    <div className="heart_icon">
                      <img src={data.sliderHeartImg} alt="" />
                    </div>
                  </div>
                  <div className="slider_user_grid">
                    <div className="user_img">
                      <img src={data.sliderUserImg} alt="user img" />
                    </div>
                    <div>
                      <h4>{data.userName} </h4>
                      <h5>{data.userId} </h5>
                    </div>
                  </div>
                  <div className="user_price_grid">
                    <div className="price_item">
                      <h5> {data.priceNft} </h5>
                      <h4>
                        {" "}
                        <img src={data.sliderCoinImg} alt="slider icon" />{" "}
                        {data.nftPlayar}{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="slider_btn_area d-flex align-items-center flex-wrap-wrap g-lg">
                    <Link to="#" className="slider_btn ">
                      {data.sliderButton1}
                    </Link>
                    <Link to="#" className="slider_btn ">
                      {data.sliderButton2}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ToActionSlider;

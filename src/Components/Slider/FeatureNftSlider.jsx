import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import FeatureNftData from "../../Data/FeatureNftData";
import { Link } from "react-router-dom";

function FeatureNftSlider() {
  return (
    <div className="feature_product_slider_area">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        speed={1050}
        breakpoints={{
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1700px
          1700: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 25,
          },
        }}
        navigation={{
          prevEl: ".features_prev_icon",
          nextEl: ".features_next_icon",
        }}
      >
        {FeatureNftData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="product_item border_linear">
                <div className="product_img">
                  <img src={item.productImg} alt="" />
                </div>
                <div className="product_content_area">
                  <div className="d-flex-between">
                    <h3 className="product_title">
                      <Link to={item.nftDetailsPath}>{item.title} </Link>{" "}
                    </h3>
                    <div>{item.heartIcon}</div>
                  </div>
                  <Link
                    to={item.userProfilePath}
                    className="user_info_area d-flex align-item-center flex-wrap-wrap g-sm"
                  >
                    <img src={item.useImg} alt="user img" />
                    <h5>{item.useId}</h5>
                  </Link>
                  <div className="bit_ammount_area d-flex-between">
                    <h4>{item.lastBit} </h4>
                    <h4>{item.lastBitAmmount} </h4>
                  </div>
                  <Link to={item.nftDetailsPath} className="default_btn">
                    {" "}
                    Place a bid{" "}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default FeatureNftSlider;

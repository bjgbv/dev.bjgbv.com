import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonial1, testimonial2, testimonial3 } from "../../constants/imgs";
const Testimonial = () => {
  return (
    <section className="testimonials_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>Testimonials</h4>
          <h1>Best Reviews</h1>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div id="testimonial-slider">
              <Swiper
                modules={[Pagination, Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                // pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  {" "}
                  <div className="testimonial">
                    <div className="testimonial_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor in reprehende.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src={testimonial1} alt="" />
                      </div>
                      <h4>James Simmons</h4>
                      <small className="post">- Web Developer</small>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial_content">
                      <p>
                        F sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor in reprehende.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src={testimonial2} alt="" />
                      </div>
                      <h4>Alex feroundo</h4>
                      <small className="post">- Founder</small>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor in reprehende.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src={testimonial3} alt="" />
                      </div>
                      <h4>Kallu Mastan</h4>
                      <small className="post">- Themeforest</small>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor in reprehende.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src={testimonial1} alt="" />
                      </div>
                      <h4>Devid max</h4>
                      <small className="post">- Codecanyou</small>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial">
                    <div className="testimonial_content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat duis aute irure dolor in reprehende.
                      </p>
                    </div>
                    <div className="testi_pic_title">
                      <div className="pic">
                        <img src={testimonial3} alt="" />
                      </div>
                      <h4>Tiklo Khan</h4>
                      <small className="post">- Senior Developer</small>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

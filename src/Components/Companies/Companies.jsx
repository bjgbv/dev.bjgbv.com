import React from "react";
import {
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
} from "../../constants/imgs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Companies = () => {
  return (
    <section className="partner_area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h4>Customers</h4>
          <h1>Selected Clients</h1>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="partner">
              <Swiper
                loop
                slidesPerView={2}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  // when window width is >= 490px
                  490: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 900px
                  900: {
                    slidesPerView: 5,
                  },
                }}
              >
                {[
                  clientLogo1,
                  clientLogo2,
                  clientLogo3,
                  clientLogo4,
                  clientLogo5,
                  clientLogo6,
                  clientLogo1,
                  clientLogo2,
                  clientLogo3,
                  clientLogo4,
                  clientLogo5,
                  clientLogo6,
                ].map((img, index) => (
                  <SwiperSlide key={index}>
                    <a href="#client_logo">
                      <img src={img} alt="imagea" />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;

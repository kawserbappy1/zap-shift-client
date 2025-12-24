import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../../../assets/bg1.png";
import bg2 from "../../../../../assets/bg2.png";
import bg3 from "../../../../../assets/bg3.png";
import icon from "../../../../../assets/vector.png";
import Container from "./../../../../../component/Container";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import Buttonbg from "./../../../../../component/Buttonbg";
import ArrowSign from "./../../../../../component/ArrowSign";
import ButtonOutline from "./../../../../../component/ButtonOutline";
const Banner = () => {
  const SliderInfo = [
    {
      id: "1",
      title: {
        normal1: "We Make Sure Your",
        highlit: "Parcel Arrives",
        normal2: "On Time – No Fuss.",
      },
      text: "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.From personal packages to business shipments — we deliver on time, every time.",
      image: bg1,
    },
    {
      id: "2",
      title: {
        normal1: "Fastest",
        highlit: "Delivery & Easy",
        normal2: "Pickup On Time – No Fuss.",
      },
      text: "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      image: bg2,
    },
    {
      id: "3",
      title: {
        normal1: "Delivery in",
        highlit: "30 Minutes",
        normal2: "at your doorstep – No Fuss.",
      },
      text: "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      image: bg3,
    },
  ];
  return (
    <div className="py-20 bannerSlide">
      <Container>
        <Swiper
          scrollbar={{ hide: true }}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Scrollbar]}
          className="mySwiper"
        >
          {SliderInfo.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between bg-white px-2 md:px-4 lg:px-10 xl:px-24 py-20 rounded-lg ">
                <div>
                  <img src={icon} alt="" className="hidden lg:block" />
                  <div className="my-5 max-w-2xl">
                    <h1 className="text-4xl lg:text-6xl font-extrabold my-8 text-bg1">
                      {slide.title.normal1} {""}
                      <span className="text-baseColor">
                        {slide.title.highlit}{" "}
                      </span>
                      {slide.title.normal2}{" "}
                    </h1>
                    <p className="text-xs md:text-base">{slide.text}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-5">
                    <div className="flex items-center">
                      <Buttonbg
                        text="Track Parcel"
                        className="rounded-full"
                      ></Buttonbg>
                      <ArrowSign></ArrowSign>
                    </div>
                    <ButtonOutline text="Be A Rider"></ButtonOutline>
                  </div>
                </div>
                <div>
                  <img
                    src={slide.image}
                    alt=""
                    className="max-w-xs md:max-w-sm xl:max-w-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../../../assets/bg1.png";
import bg2 from "../../../../../assets/bg2.png";
import bg3 from "../../../../../assets/bg3.png";
import icon from "../../../../../assets/vector.png";
import Container from "./../../../../../component/Container";
import Buttonbg from "./../../../../../component/Buttonbg";
import ArrowSign from "./../../../../../component/ArrowSign";
import ButtonOutline from "./../../../../../component/ButtonOutline";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

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
              <motion.div
                className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between bg-white px-2 md:px-4 lg:px-10 xl:px-24 py-20 rounded-lg"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={icon}
                    alt=""
                    className="hidden lg:block"
                    variants={itemVariants}
                  />
                  <motion.div
                    className="my-5 max-w-2xl"
                    variants={itemVariants}
                  >
                    <motion.h1
                      className="text-4xl lg:text-6xl font-extrabold my-8 text-bg1"
                      variants={itemVariants}
                    >
                      {slide.title.normal1}{" "}
                      <motion.span
                        className="text-baseColor inline-block"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {slide.title.highlit}{" "}
                      </motion.span>
                      {slide.title.normal2}
                    </motion.h1>
                    <motion.p
                      className="text-xs md:text-base"
                      variants={itemVariants}
                    >
                      {slide.text}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 pt-5"
                    variants={buttonVariants}
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover="hover"
                      variants={buttonVariants}
                    >
                      <Buttonbg
                        text="Track Parcel"
                        className="rounded-full"
                      ></Buttonbg>
                      <ArrowSign></ArrowSign>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <ButtonOutline text="Be A Rider"></ButtonOutline>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div variants={imageVariants}>
                  <motion.img
                    src={slide.image}
                    alt=""
                    className="max-w-xs md:max-w-sm xl:max-w-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;

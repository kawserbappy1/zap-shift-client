import { useEffect, useRef, useState } from "react";
import Container from "../../../../../component/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className=" relative">
      <button
        ref={prevRef}
        className="absolute left-[36%] -bottom-6 z-10 -translate-y-1/2  bg-baseColor p-3 rounded-full shadow"
      >
        <FaArrowLeft />
      </button>

      <button
        ref={nextRef}
        className="absolute right-[36%] -bottom-6 z-10 -translate-y-1/2 bg-baseColor p-3 rounded-full shadow"
      >
        <FaArrowRight />
      </button>
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-bg1">
            What our customers are sayings
          </h1>
          <p className=" max-w-2xl mx-auto my-5">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!.
          </p>
        </div>

        <div className="testimonial-swiper">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={"coverflow"}
            grabCursor={true}
            navigation={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 70,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper "
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.text}
                className="bg-white p-5 rounded-md"
              >
                <div>
                  <FaQuoteRight className="text-bg1 text-3xl opacity-45" />
                </div>
                <div className="my-5">
                  <p>{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 ">
                    <img
                      src={testimonial.image}
                      alt=""
                      className=" rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bg1 ">
                      {testimonial.name}
                    </h3>
                    <h6>{testimonial.designation}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

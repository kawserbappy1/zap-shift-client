import { CiBadgeDollar, CiDeliveryTruck } from "react-icons/ci";
import { GiAirplaneDeparture, GiReturnArrow } from "react-icons/gi";
import { GrServicePlay } from "react-icons/gr";
import { SiDavinciresolve } from "react-icons/si";
import Container from "./../../../../../component/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const items = [
    {
      icon: <CiDeliveryTruck />,
      title: "Express  & Standard Delivery",
      text: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: <GiAirplaneDeparture />,
      title: "Nationwide Delivery",
      text: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: <SiDavinciresolve />,
      title: "Fulfillment Solution",
      text: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <CiBadgeDollar />,
      title: "Cash on Home Delivery",
      text: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <GrServicePlay />,
      title: "Corporate Service / Contract In Logistics",
      text: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <GiReturnArrow />,
      title: "Parcel Return",
      text: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div>
      <Container>
        <div className="bg-bg1 px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl  font-bold">Our Services</h1>
            <p className="text-white max-w-2xl mx-auto my-5">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </motion.div>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5"
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white p-4 space-y-3 text-center rounded-lg transition-all duration-300 hover:bg-baseColor"
              >
                <div className="flex items-center justify-center mx-auto bg-gray-400 w-15 h-15 rounded-full border border-bg1">
                  <span className="text-xl text-bg1">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-bg1">{item.title}</h3>
                </div>
                <div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

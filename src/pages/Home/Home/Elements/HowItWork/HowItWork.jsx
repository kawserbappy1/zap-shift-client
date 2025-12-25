import { BiStoreAlt } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { FaSwatchbook } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import Container from "../../../../../component/Container";
import { motion } from "framer-motion";

const HowItWork = () => {
  const items = [
    {
      icon: <BsTruck />,
      title: "Booking Pick & Drop",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <GiPayMoney />,
      title: "Cash On Delivery",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <BiStoreAlt />,
      title: "Delivery Hub",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaSwatchbook />,
      title: "Booking SME & Corporate",
      text: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="">
      <Container>
        <div>
          <h1 className="text-4xl font-bold text-bg1 mb-5">How it Works</h1>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 "
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="space-y-5 bg-white p-8 rounded-xl transition-all duration-300 hover:border hover:boder-bg1"
            >
              <div className="text-5xl ">{item.icon}</div>
              <div className="text-2xl font-bold text-bg1">{item.title}</div>
              <div className="">{item.text}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default HowItWork;

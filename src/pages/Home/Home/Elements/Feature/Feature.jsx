import img1 from "../../../../../assets/feature/Illustration1.png";
import img2 from "../../../../../assets/feature/Illustration2.png";
import img3 from "../../../../../assets/feature/Illustration2.png";
import Container from "../../../../../component/Container";

const Feature = () => {
  const items = [
    {
      image: img1,
      title: "Live Parcel Tracking",
      text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: img2,
      title: "100% Safe Delivery",
      text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: img3,
      title: "24/7 Call Center Support",
      text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <>
      <Container>
        <div>
          {items.map((item) => (
            <div key={item.title}>
              <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10 bg-white mb-5 p-10">
                <div className="border-r pr-6 border-dashed">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-bg1 mb-5">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Feature;

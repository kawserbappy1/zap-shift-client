import React from "react";
import Container from "../../../../../component/Container";
import ButtonOutline from "../../../../../component/ButtonOutline";
import Buttonbg from "../../../../../component/Buttonbg";
import img2 from "../../../../../assets/mercent/vector3.png";
const Mercent = () => {
  return (
    <>
      <Container>
        <div className="bg-bg1 flex flex-col md:flex-row items-center justify-between py-10 px-10 pt-10 gap-10">
          <div className="flex-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold md:leading-16">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="max-w-md my-6 text-white">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex gap-3">
              <Buttonbg text="Become a Merchant"></Buttonbg>
              <ButtonOutline text="Earn with ZapShift Courier"></ButtonOutline>
            </div>
          </div>
          <div className="flex-1">
            <img src={img2} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Mercent;

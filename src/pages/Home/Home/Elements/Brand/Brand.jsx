import Container from "../../../../../component/Container";
import Marquee from "react-fast-marquee";
import brand1 from "../../../../../assets/brand/brand1.png";
import brand2 from "../../../../../assets/brand/brand2.png";
import brand3 from "../../../../../assets/brand/brand3.png";
import brand4 from "../../../../../assets/brand/brand4.png";
import brand5 from "../../../../../assets/brand/brand5.png";
import brand6 from "../../../../../assets/brand/brand6.png";
const Brand = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-bg1">
          We've helped thousands of sales teams
        </h1>
      </div>
      <Container>
        <Marquee autoFill={true}>
          <div className="flex items-center gap-10 pt-10 ">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
            <img src={brand4} alt="" />
            <img src={brand3} alt="" />
            <img src={brand2} alt="" />
            <img src={brand1} alt="" />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default Brand;

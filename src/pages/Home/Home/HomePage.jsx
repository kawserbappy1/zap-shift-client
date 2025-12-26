import Banner from "./Elements/Banner/Banner";
import Brand from "./Elements/Brand/Brand";
import FAQ from "./Elements/FAQ/FAQ";
import Feature from "./Elements/Feature/Feature";
import HowItWork from "./Elements/HowItWork/HowItWork";
import Mercent from "./Elements/Mercent/Mercent";
import Services from "./Elements/Services/Services";
import Testimonial from "./Elements/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <HowItWork></HowItWork>
      </section>
      <section className=" my-20">
        <Services></Services>
      </section>
      <section className=" my-20">
        <Brand></Brand>
      </section>
      <section className=" my-20">
        <Feature></Feature>
      </section>
      <section className=" my-20">
        <Mercent></Mercent>
      </section>
      <section className=" my-20">
        <Testimonial></Testimonial>
      </section>
      <section className=" my-20">
        <FAQ></FAQ>
      </section>
    </>
  );
};

export default HomePage;

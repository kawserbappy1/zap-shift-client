import Banner from "./Elements/Banner/Banner";
import Brand from "./Elements/Brand/Brand";
import Feature from "./Elements/Feature/Feature";
import HowItWork from "./Elements/HowItWork/HowItWork";
import Services from "./Elements/Services/Services";

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
    </>
  );
};

export default HomePage;

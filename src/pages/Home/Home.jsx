import React from "react";
import Banner from "../Banner/Banner";
import UdayBuilders from "../UdayBuilders/UdayBuilders";
import LoremIpsum from "../LoremIpsum/LoremIpsum";
import WhyUday from "../WhyUday/WhyUday";
import IpsumSimply from "../IpsumSimply/IpsumSimply";
import Location from "../Location/Location";
import WouldYouLike from "../WouldYouLike/WouldYouLike";
import Testimonial from "../Testimonial/Testimonial";
import Title from "../Title/Title";
import Brand from "../Brand/Brand";

const Home = () => {
  return (
    <div>
      <Banner />
      <UdayBuilders />
      <LoremIpsum />
      <WhyUday />
      <IpsumSimply />
      <Location />
      <WouldYouLike />
      <Testimonial />
      <Title />
      <Brand/>
    </div>
  );
};

export default Home;

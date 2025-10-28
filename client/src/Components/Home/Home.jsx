import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import AiTools from "../AiTools/AiTools";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AiTools />
      <Testimonial />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import AiTools from "../AiTools/AiTools";
import Testimonial from "../Testimonial/Testimonial";
import Plan from "../Plan/Plan";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  );
};

export default Home;

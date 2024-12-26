import React from "react";
import Heropage from "../components/Ui/Heropage";
import Service from "../components/Ui/Service";
import System from "../components/Ui/System";
import About from "../components/Ui/About";
import Newsletter from "../components/Ui/Newsletter";

const Home = () => {
  return (
    <div>
      <Heropage />
      <Service />
      <System />
      <About />
      <Newsletter />
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FarmProductLists from "../Components/FarmProductLists";

const FarmProduct = () => {
  return (
    <div>
      <Navbar />
      <FarmProductLists />
      <Footer />
    </div>
  );
};

export default FarmProduct;

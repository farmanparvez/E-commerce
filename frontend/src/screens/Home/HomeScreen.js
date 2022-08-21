import React from "react";
import Container from "../../components/Container";
import Carousal from "../../components/Carousal/Carousal";
import LatestProduct from "./LatestProduct";
import Category from "./Category";
import MenContent from "../MenFashion/MenContent";
import WomneContent from "../WomenFashion/WomneContent";
import ElectronicsContent from "../Electronics/ElectronicsContent";
import "./Home.scss";

const HomeScreen = () => {
  return (
    <Container>
      <Carousal />
      <Category />
      <LatestProduct />
      <MenContent />
      <WomneContent />
      <ElectronicsContent />
    </Container>
  );
};

export default HomeScreen;

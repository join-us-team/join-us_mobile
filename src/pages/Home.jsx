import React from "react";
import StyledLayout from "../styles/StyledLayout";
import styledComponents from "../styles/HomeStyle";
import MainImgSrc from "../assets/images/main-image.png";

const { MainImg } = styledComponents

const Home = () => {
  return (
    <StyledLayout>
      <MainImg src={MainImgSrc} />
    </StyledLayout>
  );
}

export default Home;
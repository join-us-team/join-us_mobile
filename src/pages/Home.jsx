import React from "react";
import styledComponents from "../styles/HomeStyle";
import MainImgSrc from "../assets/images/main-image.png";
import Content1 from "../components/Home/Content1";
import Content2 from "../components/Home/Content2";

const { Container, MainImg, Contents } = styledComponents

const Home = () => {
  return (
    <Container>
      <MainImg src={MainImgSrc} />
      <Contents>
        <Content1 />
        <Content2 />
      </Contents>
    </Container>
  );
}

export default Home;
import React from "react";
import StyledLayout from "../components/StyledLayout";
import styled from "styled-components";
import MainImgSrc from "../assets/images/main-image.png";

const MainImg = styled.img`
  width: 100%;
`

function Home() {
  return (
    <StyledLayout>
      <MainImg src={MainImgSrc} />
    </StyledLayout>
  );
}

export default Home;
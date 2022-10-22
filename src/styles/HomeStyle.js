import styled from "styled-components";

const Container = styled.div``
const MainImg = styled.img`
  width: 100%;
  margin-top: 50px;
`
const Contents = styled.div`
  padding: 0 80px;
  text-align: center;

  h3 {
    font-size: 40px;
    font-weight: bold;
    color: #fe8dbd;
    margin-top: 80px;
  }
  img {
    margin: 50px 0;
    width: 100%;
  }
  p {
    font-size: 18px;
    line-height: 2em;
  }
  span {
    color: #fe8dbd;
  }
`

const styledComponents = { Container, MainImg, Contents };

export default styledComponents;
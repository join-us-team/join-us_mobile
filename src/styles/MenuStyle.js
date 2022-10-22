import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 59px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  ul {
    width: 320px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 30px 0 70px 0;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    right: -1px;
  }
  li:hover {
    a {
      color: #fe8dbd;
    }
  }
  a {
    line-height: 4;
    font-size: 20px;
    font-weight: bold;
    padding-left: 50px;
  }
`


const styledComponents = { Container };

export default styledComponents;
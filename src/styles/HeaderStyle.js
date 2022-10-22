import styled from 'styled-components';
import LogoUrl from '../assets/images/logo.png';

const Container = styled.div`
  width: 640px;
  height: 60px;
  border: 1px solid #ccc;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;

  svg {
    font-size: 30px;
    cursor: pointer;
    color: #fe8dbd;
  }
`
const Logo = styled.a`
  width: 70px;
  height: 40px;
  background-image: url(${LogoUrl});
  background-repeat: no-repeat; 
  background-size: contain;
`

const styledComponents = { Container, Logo };

export default styledComponents;
import styled from 'styled-components';
import LogoUrl from '../assets/images/logo.png';

const Container = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`
const Logo = styled.div`
  width: 70px;
  height: 40px;
  background-image: url(${LogoUrl});
  background-repeat: no-repeat; 
  background-size: contain;
`

const styledComponents = { Container, Logo };

export default styledComponents;
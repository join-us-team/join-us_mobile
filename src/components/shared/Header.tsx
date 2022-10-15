import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Container = styled.div`
  width: 640px;
  height: 60px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid purple;
`

function Header() {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
}

export default Header;
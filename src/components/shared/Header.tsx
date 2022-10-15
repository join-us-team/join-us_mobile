import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
  border: 1px solid red;
  padding: 10px 0 10px 10px;
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
    </Container>
  );
}

export default Header;
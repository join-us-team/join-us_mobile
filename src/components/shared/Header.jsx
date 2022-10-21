import React from 'react';
import styledComponents from '../../styles/HeaderStyle';
import { useSelector } from 'react-redux';

import Menu from './Menu';
import Navigation from './Navigation';

const { Container, Logo } = styledComponents;

const Header = () => {

  let menuToggle = useSelector((state)=>state.menuToggle);

  return (
    <Container>
        <Logo />
        <Navigation />
        {
          menuToggle
          ? <Menu />
          : null
        }
    </Container>
  );
}

export default Header;
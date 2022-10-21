import React from 'react';
import styledComponents from '../../styles/MenuStyle';
import MenuList from './MenuList';

const { Container } = styledComponents;

const Menu = () => {
  return (
    <Container>
      <MenuList />  
    </Container>
  );
}

export default Menu;
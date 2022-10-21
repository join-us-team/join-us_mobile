import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { onMenuToggle } from "../../store";

import { HiOutlineMenu } from "react-icons/hi"

const Container = styled.div``

const Navigation = () => {
  const dispatch = useDispatch();

  return(
    <Container>
        <div onClick={()=>{
            dispatch(onMenuToggle());
          }}>
          <HiOutlineMenu />
        </div>
    </Container>
  );
}

export default Navigation;
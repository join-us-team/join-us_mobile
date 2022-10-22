import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { onMenuToggle } from "../../store";

import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Container = styled.div``

const Navigation = () => {
  const dispatch = useDispatch();
  let menuToggle = useSelector((state)=>state.menuToggle);

  return(
    <Container>
        <div onClick={()=>{
            dispatch(onMenuToggle());
          }}>
            {
              menuToggle
              ? <CgClose />
              : <HiOutlineMenu />
            }
          
        </div>
    </Container>
  );
}

export default Navigation;
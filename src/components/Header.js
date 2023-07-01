import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://blog.flamingtext.com/blog/2023/06/30/flamingtext_com_1688153048_333724823.png" border="0" alt="Logo Design by FlamingText.com" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  // background-color: ${({ theme }) => theme.colors.bg};
  background-color:#f2f2f2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  img{
    width:280px;
    height:10rem;
    margin-top:1rem;
    padding-right:4rem;
    margin-right:-2rem;
    // border-radius:2px;
    // background-color:${({theme})=> theme.colors.bg};
    // transform: scale(0.5);
    //  position:relative;
    //  left:-4rem;
    // transform: rotate3d(0, 1, 0.5, 3.142rad);

  }
 
`;

export default Header;

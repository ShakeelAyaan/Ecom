import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="https://img.freepik.com/premium-vector/3d-cartoon-shopping-cart-isolated-white-background-vector-3d-illustration_221648-538.jpg?w=740" alt="my lgo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  // background-color: ${({ theme }) => theme.colors.bg};
  background-color:white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  img{
    width:200px;
    height:300px;
    margin-top:5rem;
    border-radius:2px;
    background-color:${({theme})=> theme.colors.bg};
    transform: scale(1.4);
    transform: rotate3d(0, 1, 0.5, 3.142rad);

  }
 
`;

export default Header;

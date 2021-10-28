import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  background-color: none;
  display: flex;
  border-bottom: 2px solid #333333;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.5rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
  :hover {
    text-decoration: underline black;
  }
`;

export const NavBar = () => {
  return (
    <Container>
      <Left>
        <Logo>ND</Logo>
      </Left>
      <Right>
        <MenuItem>Services</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Right>
    </Container>
  );
};

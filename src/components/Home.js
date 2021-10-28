import React from "react";
import styled from "styled-components";
import SurferDan from "../image/suferdan.jpg";

const Content = styled.div`
  background-image: url(${SurferDan});
  width: 3000px;
  height: 2000px;
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 50px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: hotpink;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;
const Right = styled.div`
  width: 50%;
  padding-top: 0px;
  padding-right: 0px;
`;

const Image = styled.img`
  width: 100%;
`;

export const Home = () => {
  return (
    <Container>
      {/* <Content> */}
      <Left>
        <Title>Nat and Dan Designs</Title>
        <Description>
          Hi, welcome to our page! We are two web developers who love working
          with clients to create fun and inviting websites. Take a look around
          and leave a little message if you're interested in more information.
        </Description>
        <Info>
          <Button>Leave a lil message</Button>
        </Info>
      </Left>
      <Right>
        <Image src={SurferDan} />
      </Right>
      {/* </Content> */}
    </Container>
  );
};

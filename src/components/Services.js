import React from "react";
import styled from "styled-components";
import { ServicesCard } from "./ServicesCard";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Right = styled.div`
  width: 50%;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Services = () => {
  return (
    <Container>
      <Left>
        <Title>Services</Title>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Description>
        <Description>
          We care your business and guarantee you to achieve marketing goals.
        </Description>
      </Left>
      <Right>
        <CardContainer>
          <ServicesCard />
        </CardContainer>
      </Right>
    </Container>
  );
};

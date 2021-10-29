import React from "react";
import styled from "styled-components";
import WebDev from "../image/webdev.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ServicesCard = () => {
  return (
    <>
      <Container>
        <Image src={WebDev} />
        <Text>Web Design</Text>
        {/* <Text>Software Engineering</Text>
        <Text>Branding</Text>
        <Text>Architectural Rendering and Modeling</Text> */}
      </Container>
    </>
  );
};

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Top = styled.div`
  height: 70%;
  background-color: yellow;
  display: flex;
`;

const TextBox = styled.h1`
  height: 300px;
  width: 30%;
  background-color: white;
  border: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 200px;
  margin-bottom: 25px;
`;

const TextBoxMainText = styled.h1`
  font-size: larger;
`;

const TextBoxParagraph = styled.h4`
  font-size: medium;
  padding-top: 40px;
`;

const Bottom = styled.div`
  height: 30%;
  background-color: green;
  display: flex;
  justify-content: space-around;
`;

const ContactCard = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  border: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: space-between;
`;

const ContactText = styled.h1`
  font-size: small;
`;

export const Contact = () => {
  return (
    <Container>
      <Top>
        <TextBox>
          <TextBoxMainText>We Would Love To Hear From You!</TextBoxMainText>
          <TextBoxParagraph>
            Let our team bring your idea to life. Please reach us via phone or
            email.
          </TextBoxParagraph>
        </TextBox>
      </Top>
      <Bottom>
        <ContactCard>
          <ContactText>616-821-0139</ContactText>
          <ContactText>Phone</ContactText>
        </ContactCard>
        <ContactCard>
          <ContactText>NDdesign@gmail.com</ContactText>
          <ContactText>Email</ContactText>
        </ContactCard>
        <ContactCard>
          <ContactText>Nelson Business Systems</ContactText>
          <ContactText>Upwork</ContactText>
        </ContactCard>
      </Bottom>
    </Container>
  );
};

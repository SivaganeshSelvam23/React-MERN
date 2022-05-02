import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 11px;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  padding: 6px;
  border: none;
  color: white;
  background-color: teal;
  cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Desc>Get timely update from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email Address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

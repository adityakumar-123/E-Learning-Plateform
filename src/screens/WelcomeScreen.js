import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/welcome.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <ButtonContainer>
        <GuestBtn>Guest Sign in</GuestBtn>
        <SignInBtn>Sign in</SignInBtn>
      </ButtonContainer>
      <StatusBar style="light" />
    </ImageBackground>
  );
};
export default WelcomeScreen;
const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 100px;
`;
const GuestBtn = styled(Button).attrs({ mode: "contained" })`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 170px;
`;
const SignInBtn = styled(Button).attrs({ mode: "contained" })`
  color: ${({ theme }) => theme.colors.white};
  width: 170px;
`;

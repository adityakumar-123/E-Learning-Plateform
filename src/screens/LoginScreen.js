import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import ErrorMessage from "../components/ErrorMessage";
import { AppButton, Input, MuteText } from "../utils";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerImage source={require("../../assets/doctor.jpg")}>
      <InputContainer>
        <MuteText>Sign in to continue</MuteText>
        <Input
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          label="Email"
          mode="outlined"
          left={<Input.Icon name="email" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          value={password}
          autoCapitalize="none"
          label="Password"
          mode="outlined"
          secureTextEntry
          left={<Input.Icon name="lock" />}
          onChangeText={(text) => setPassword(text)}
        />
        <ErrorMessage />
        <AppButton
          mode="contained"
          onPress={() => onSignInUser(email, password)}
        >
          Sign In
        </AppButton>
        <AppButton mode="outlined">Sign Up</AppButton>
      </InputContainer>
      <StatusBar translucent />
    </ContainerImage>
  );
};
export default LoginScreen;

const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const InputContainer = styled.View`
  border-top-left-radius: ${({ theme }) => theme.spacing.xxl};
  border-top-right-radius: ${({ theme }) => theme.spacing.xxl};
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

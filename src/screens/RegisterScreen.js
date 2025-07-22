import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import ErrorMessage from "../components/ErrorMessage";
import { AppButton, Input, MuteText } from "../utils";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerImage source={require("../../assets/doctor.jpg")}>
      <InputContainer>
        <MuteText>Create an account</MuteText>
        <Input
          value={name}
          autoCompleteType="name"
          label="Name"
          mode="outlined"
          left={<Input.Icon name="account" />}
          onChangeText={(text) => setName(text)}
        />
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
        <AppButton mode="contained">Sign Up</AppButton>
        <TextContainer>
          <MuteText>Already have an account?</MuteText>
          <Button>Sign In</Button>
        </TextContainer>
      </InputContainer>
      <StatusBar translucent />
    </ContainerImage>
  );
};
export default RegisterScreen;

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
const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

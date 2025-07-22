import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const Container = ({ children, statusBarColor = "#ECFDF5" }) => {
  return (
    <SafeAreaView>
      <View>
        {children}
        <ExpoStatusBar style="auto" backgroundColor={statusBarColor} />
      </View>
    </SafeAreaView>
  );
};
export default Container;
const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const View = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

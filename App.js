import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/theme/paperTheme";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ReadingScreen from "./src/screens/ReadingScreen";
import NoticeBoardScreen from "./src/screens/NoticeBoardScreen";
import QuizScreen from "./src/screens/QuizScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={paperTheme}>
        <QuizScreen />
      </PaperProvider>
    </ThemeProvider>
  );
}

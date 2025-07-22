import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const MuteText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 17px;
`;
export const Input = styled(TextInput)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;
export const AppButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  height: 50px;
  justify-content: center;
`;
export const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

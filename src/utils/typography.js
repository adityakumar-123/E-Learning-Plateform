import styled from "styled-components/native";

export const H1 = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green};
  padding: ${({ theme }) => theme.spacing.sm};
`;
export const H2 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.sm};
`;
export const Caption = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

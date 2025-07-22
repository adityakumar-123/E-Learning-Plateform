import React from "react";
import { Chip } from "react-native-paper";
import styled from "styled-components/native";
const SquareCard = ({
  imageUrl = "https://picsum.photos/700",
  title = " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  time = "15:00",
}) => (
  <CardContainer>
    <Img source={{ uri: imageUrl }} />
    <Title numberOfLines={2}>{title}</Title>
    <ClockChip icon="clock">{time}</ClockChip>
  </CardContainer>
);

export default SquareCard;
const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  margin-horizontal: ${({ theme }) => theme.spacing.md};
  height: 150px;
  width: 150px;
  elevation: 3;
  border-radius: 3px;
  align-items: center;
`;
const Img = styled.Image`
  height: 80px;
  width: 100%;
`;
const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 130px;
  text-align: center;
`;
const ClockChip = styled(Chip)`
  width: 90px;
  border: 4px ${({ theme }) => theme.colors.lightGreen};
`;

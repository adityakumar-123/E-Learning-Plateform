import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const RectangularCard = ({
  imageUri = "https://i.ibb.co/fFH03T9/image5.jpg",
  title = "One of our rich student got two trillion dollar and lost three",
}) => {
  return (
    <CardContainer>
      <Img source={{ uri: imageUri }} />
      <Title numberOfLines={3}>{title}</Title>
    </CardContainer>
  );
};
export default RectangularCard;

const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  margin-horizontal: ${({ theme }) => theme.spacing.md};
  width: 230px;
  height: 70px;
  elevation: 3;
  border-radius: 3px;
  flex-direction: row;
`;
const Img = styled.Image`
  height: 70px;
  width: 100px;
`;
const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 130px;
`;

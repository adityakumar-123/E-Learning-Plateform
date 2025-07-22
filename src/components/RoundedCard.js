import React from "react";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Caption, H2 } from "../utils/typography";

const RoundedCard = ({
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPbGPI_DeaK8k7Gn-NjGG7I14xdQPCDRjDg&usqp=CAU",
}) => {
  return (
    <Container>
      <Avatar.Image source={{ uri: imageUrl }} size={100} />
      <H2>Xukar bug</H2>
      <Caption>Billionaire, St</Caption>
    </Container>
  );
};
export default RoundedCard;

const Container = styled.View`
  margin: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

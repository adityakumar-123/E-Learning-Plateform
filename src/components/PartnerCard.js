import React from "react";
import styled from "styled-components/native";

const PartnerCard = (props) => {
  return <Img source={{ uri: "https://i.ibb.co/jJV5SWk/sun-1.png" }} />;
};
export default PartnerCard;

const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: ${({ theme }) => theme.spacing.md};
`;

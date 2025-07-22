import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Container from "../components/Container";
import PartnerCard from "../components/PartnerCard";
import RectangularCard from "../components/RectangularCard";
import RoundedCard from "../components/RoundedCard";
import SquareCard from "../components/SquareCard";
import { HorizontalScroll } from "../utils";
import { H1 } from "../utils/typography";
import NoticeBoardScreen from "./NoticeBoardScreen";

const HomeScreen = (props) => {
  return (
    <Container>
      <HomeScrollView>
        <HeadContainer>
          <H1>Trending News</H1>
          <NoticeBoardScreen />
        </HeadContainer>
        <View>
          <HorizontalScroll>
            <RectangularCard />
            <RectangularCard />
          </HorizontalScroll>
        </View>
        <H1>Ongoing Contest</H1>
        <View style={{ height: 180 }}>
          <HorizontalScroll>
            <SquareCard />
            <SquareCard />
            <SquareCard />
          </HorizontalScroll>
        </View>
        <CourseContainer>
          <H1>Courses</H1>
          <View style={{ height: 180 }}>
            <HorizontalScroll>
              <SquareCard />
              <SquareCard />
              <SquareCard />
            </HorizontalScroll>
          </View>
        </CourseContainer>
        <H1>Magazine</H1>
        <View>
          <HorizontalScroll>
            <RectangularCard />
            <RectangularCard />
          </HorizontalScroll>
        </View>
        <H1>Team</H1>
        <View>
          <HorizontalScroll>
            <RoundedCard />
            <RoundedCard />
            <RoundedCard />
          </HorizontalScroll>
        </View>
        <H1>Professional Work</H1>
        <View>
          <HorizontalScroll>
            <RectangularCard />
            <RectangularCard />
          </HorizontalScroll>
        </View>
        <H1>Research</H1>
        <View>
          <HorizontalScroll>
            <RectangularCard />
            <RectangularCard />
          </HorizontalScroll>
        </View>
        <H1>Partner Organization</H1>
        <View>
          <HorizontalScroll>
            <PartnerCard />
          </HorizontalScroll>
        </View>
        <View style={{ height: 200 }} />
      </HomeScrollView>
    </Container>
  );
};
export default HomeScreen;
const CourseContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray};
`;
const HomeScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
const HeadContainer = styled.View`
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

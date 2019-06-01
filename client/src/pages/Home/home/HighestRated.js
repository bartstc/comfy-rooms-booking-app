import React from 'react';

import { Section, CardList, Name, Location, Wrapper, Rating, Opinions } from './HighestRated.styles';
import { SectionTitle } from '../Home.styles';

import Card from '../../../components/Card/Card';

const HighestRated = () => {
  return (
    <Section>
      <SectionTitle>Check highest rated</SectionTitle>
      <CardList>
        <Card
          path="/"
          background="/images/Showcase.jpg"
        >
          <Name>Triple Estate Hotel</Name>
          <Location>Amsterdam</Location>
          <Wrapper>
            <Rating>9.2</Rating>
            <Opinions>23 opinions</Opinions>
          </Wrapper>
        </Card>
        <Card
          path="/"
          background="/images/Showcase.jpg"
        >
          <Name>Triple Estate Hotel</Name>
          <Location>Amsterdam</Location>
          <Wrapper>
            <Rating>9.2</Rating>
            <Opinions>23 opinions</Opinions>
          </Wrapper>
        </Card>
        <Card
          path="/"
          background="/images/Showcase.jpg"
        >
          <Name>Triple Estate Hotel</Name>
          <Location>Amsterdam</Location>
          <Wrapper>
            <Rating>9.2</Rating>
            <Opinions>23 opinions</Opinions>
          </Wrapper>
        </Card>
        <Card
          path="/"
          background="/images/Showcase.jpg"
        >
          <Name>Triple Estate Hotel</Name>
          <Location>Amsterdam</Location>
          <Wrapper>
            <Rating>9.2</Rating>
            <Opinions>23 opinions</Opinions>
          </Wrapper>
        </Card>
      </CardList>
    </Section>
  )
};

export default HighestRated;
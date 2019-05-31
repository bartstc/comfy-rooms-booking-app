import React, { Component } from 'react';

import { Section, CardList, Name, Location, Price, Wrapper, Rating, Opinions } from './HighestRated.styles';
import { SectionTitle } from '../Home.styles';

import Card from '../../../components/Card/Card';

class HighestRated extends Component {
  render() {
    return (
      <Section>
        <SectionTitle>Check highest rated</SectionTitle>
        <CardList>
          <Card
            path="/"
          >
            <Name>Triple Estate Hotel</Name>
            <Location>Amsterdam</Location>
            {/* <Price>Price: $ 420</Price> */}
            <Wrapper>
              <Rating>9.2</Rating>
              <Opinions>23 opinions</Opinions>
            </Wrapper>
          </Card>
          <Card
            path="/"
          >
            <Name>Triple Estate Hotel</Name>
            <Location>Amsterdam</Location>
            {/* <Price>Price: $ 420</Price> */}
            <Wrapper>
              <Rating>9.2</Rating>
              <Opinions>23 opinions</Opinions>
            </Wrapper>
          </Card>
          <Card
            path="/"
          >
            <Name>Triple Estate Hotel</Name>
            <Location>Amsterdam</Location>
            {/* <Price>Price: $ 420</Price> */}
            <Wrapper>
              <Rating>9.2</Rating>
              <Opinions>23 opinions</Opinions>
            </Wrapper>
          </Card>
          <Card
            path="/"
          >
            <Name>Triple Estate Hotel</Name>
            <Location>Amsterdam</Location>
            {/* <Price>Price: $ 420</Price> */}
            <Wrapper>
              <Rating>9.2</Rating>
              <Opinions>23 opinions</Opinions>
            </Wrapper>
          </Card>
        </CardList>
      </Section>
    );
  }
}

export default HighestRated;
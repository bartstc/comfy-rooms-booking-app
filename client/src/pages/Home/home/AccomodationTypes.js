import React, { Component } from 'react';

import { Section, CardList, Type, Count } from './AccomodationTypes.styles';
import { SectionTitle } from '../Home.styles';

import Card from '../../../components/Card/Card';

class HighestRated extends Component {
  render() {
    return (
      <Section>
        <SectionTitle>Search by type of accomodation</SectionTitle>
        <CardList>
          <Card
            path="/"
          >
            <Type>Apartaments</Type>
            <Count>34 Offerts</Count>
          </Card>
          <Card
            path="/"
          >
            <Type>Apartaments</Type>
            <Count>34 Offerts</Count>
          </Card>
          <Card
            path="/"
          >
            <Type>Apartaments</Type>
            <Count>34 Offerts</Count>
          </Card>
          <Card
            path="/"
          >
            <Type>Apartaments</Type>
            <Count>34 Offerts</Count>
          </Card>
        </CardList>
      </Section>
    );
  }
}

export default HighestRated;
import React from 'react';
import { Link } from 'react-router-dom';

import { Section, CardList, Card, City, Country, Price } from './MostVisited.styles';
import { SectionTitle } from '../Home.styles';

const MostVisited = () => {
  return (
    <Section>
      <SectionTitle>Most visited cities</SectionTitle>
      <CardList>
        <Link to="/">
          <Card background="/images/Amsterdam.jpg">
            <City>Amsterdam</City>
            <Country>Netherlands</Country>
            <Price>659 Offers</Price>
          </Card>
        </Link>
        <Card background="/images/Amsterdam.jpg">
          <City>Amsterdam</City>
          <Country>Netherlands</Country>
          <Price>Average price: 420$</Price>
        </Card>
        <Card background="/images/Amsterdam.jpg">
          <City>Amsterdam</City>
          <Country>Netherlands</Country>
          <Price>Average price: 420$</Price>
        </Card>
        <Card background="/images/Amsterdam.jpg">
          <City>Amsterdam</City>
          <Country>Netherlands</Country>
          <Price>Average price: 420$</Price>
        </Card>
      </CardList>
    </Section>
  )
};

export default MostVisited;
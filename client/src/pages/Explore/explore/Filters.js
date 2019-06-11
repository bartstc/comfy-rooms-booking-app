import React from 'react';
import { types, stars, price, facilities } from '../../../utils/categories';

import { FilterList, Title } from './Filters.styles';

import CollapseCheckbox from '../../../components/Inputs/CollapseCheckbox/CollapseCheckbox';
import CollapseRadio from '../../../components/Inputs/CollapseRadio/CollapseRadio';

const Filters = ({
  handleFilters
}) => (
  <FilterList>
    <Title>Filters</Title>
    <CollapseCheckbox
      open={false}
      title="Type"
      list={types}
      handleFilters={handleFilters}
      category="type"
    />
    <CollapseCheckbox
      open={false}
      title="Stars"
      list={stars}
      handleFilters={handleFilters}
      category="stars"
    />
    <CollapseCheckbox
      open={false}
      title="Facilities"
      list={facilities}
      handleFilters={handleFilters}
      category="facilities"
    />
    <CollapseRadio
      open={false}
      title="Price"
      list={price}
      handleFilters={handleFilters}
      category="price"
    />
  </FilterList>
);

export default Filters;
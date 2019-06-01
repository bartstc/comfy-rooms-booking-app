import React, { useState } from 'react';
import { types, stars, price, facilities } from '../../../utils/categories';

import { FilterList, Title } from './Filters.styles';

import CollapseCheckbox from '../../../components/Inputs/CollapseCheckbox/CollapseCheckbox';
import CollapseRadio from '../../../components/Inputs/CollapseRadio/CollapseRadio';

const initFilters = {
  type: [],
  stars: [],
  facilities: [],
  price: []
};

const Filters = () => {
  const [filters, setFilters] = useState(initFilters);

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      };
    };

    return array;
  };

  const onFilter = (filtersArray, category) => {
    const newFilters = { ...filters };
    newFilters[category] = filtersArray;

    // handle price filter
    if (category === 'price') {
      let priceValues = handlePrice(filtersArray);
      newFilters[category] = priceValues;
    };

    showFilteredResults(newFilters);

    setFilters(newFilters);
  };

  const showFilteredResults = (filtersArray) => {
    console.log(filtersArray)

    // HANDLE DISPATCH
    // this.props.dispatch(getProductsToShop(
    //   0, // skip is 0, server filters from scratch
    //   this.state.limit,
    //   filters
    // )).then(() => {
    //   console.log(filters); // object of arrays
    //   this.setState({
    //     skip: 0 // reset skip
    //   })
    // })
  };

  return (
    <FilterList>
      <Title>Filters</Title>
      <CollapseCheckbox
        open={false}
        title="Type"
        list={types}
        handleFilters={onFilter}
        category="type"
      />
      <CollapseCheckbox
        open={false}
        title="Stars"
        list={stars}
        handleFilters={onFilter}
        category="stars"
      />
      <CollapseCheckbox
        open={false}
        title="Facilities"
        list={facilities}
        handleFilters={onFilter}
        category="facilities"
      />
      <CollapseRadio
        open={false}
        title="Price"
        list={price}
        handleFilters={onFilter}
        category="price"
      />
    </FilterList>
  );
};

export default Filters;
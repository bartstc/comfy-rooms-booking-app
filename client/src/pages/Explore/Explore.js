import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { price } from '../../utils/categories';
import {filterRooms} from '../../modules/rooms/roomsActions';

import { ExploreContainer } from './Explore.styles';

import SearchForm from '../../components/SearchForm/SearchForm';
import RoomList from './explore/RoomList';
import Filters from './explore/Filters';

const initFilters = {
  type: [],
  stars: [],
  facilities: [],
  price: []
};

const initRestrictions = {
  limit: 10,
  skip: 0
};

const Explore = ({
  filterRooms,
  order: {city, adults, children}
}) => {
  const [filters, setFilters] = useState(initFilters);
  const [restrictions, setRestrictions] = useState(initRestrictions);

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
    const searchData = { city, adults, children };

    filterRooms(
      filtersArray,
      restrictions.limit,
      0,
      searchData
    );
    setRestrictions({ ...restrictions, skip: 0 });
  };

  return (
    <>
      <SearchForm />
      <ExploreContainer>
        <Filters 
          handleFilters={onFilter}
        />
        <RoomList />
      </ExploreContainer>
    </>
  );
};

Explore.propTypes = {
  filterRooms: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

const mapStateToProps = ({order}) => ({order});

export default connect(mapStateToProps, {filterRooms})(Explore);
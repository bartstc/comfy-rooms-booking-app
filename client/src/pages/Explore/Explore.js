import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { price } from '../../utils/categories';
import { filterRooms } from '../../modules/rooms/roomsActions';

import { ExploreContainer } from './Explore.styles';

import SearchForm from '../../components/SearchForm/SearchForm';
import RoomList from './explore/RoomList';
import Filters from './explore/Filters';
import Spinner from '../../components/Spinner/Spinner';

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
  order,
  rooms: { rooms, loading }
}) => {
  const [filters, setFilters] = useState(initFilters);
  const [restrictions, setRestrictions] = useState(initRestrictions);

  useEffect(() => {
    if (rooms.length === 0) {
      const { city, adults, children } = order;
      const searchData = { city, adults, children };

      filterRooms(
        filters,
        restrictions.limit,
        0,
        searchData
      );
    };
  }, [order, filters, restrictions, filterRooms]);

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
    const { city, adults, children } = order;
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
        <Filters handleFilters={onFilter} />
        {loading
          ? <Spinner />
          : <RoomList />
        }
      </ExploreContainer>
    </>
  );
};

Explore.propTypes = {
  filterRooms: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired
};

const mapStateToProps = ({ order, rooms }) => ({ order, rooms });

export default connect(mapStateToProps, { filterRooms })(Explore);
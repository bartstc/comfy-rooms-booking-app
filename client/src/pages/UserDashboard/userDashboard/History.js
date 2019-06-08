import React from 'react';
import PropTypes from 'prop-types';

import { HistoryWrapper, Table, Empty, CommentBtn } from './History.styles';

const History = ({ handleClickOpen }) => {
  const handleOpen = (id) => {
    handleClickOpen(id);
  };

  return (
    <HistoryWrapper>
      {/* <Empty>Your history of orders is empty for now.</Empty> */}
      <Table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Hotel</th>
            <th>Contact</th>
            <th>In</th>
            <th>Out</th>
            <th>Total</th>
            <th>Opinion</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td><CommentBtn onClick={() => handleOpen('111')}>Add</CommentBtn></td>
          </tr>
        </tbody>
      </Table>
    </HistoryWrapper>
  );
};

History.propTypes = {
  handleClickOpen: PropTypes.func.isRequired
};

export default History;
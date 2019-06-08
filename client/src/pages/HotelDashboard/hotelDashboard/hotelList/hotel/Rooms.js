import React from 'react';

import { Table, DeleteBtn } from './Rooms.styles.js';

const Rooms = () => (
  <Table>
    <thead>
      <tr>
        <th>Room ID</th>
        <th>Price</th>
        <th>Adults</th>
        <th>Children</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5556dhdhjjsh78</td>
        <td>$ 560</td>
        <td>4</td>
        <td>2</td>
        <td><DeleteBtn>Delete</DeleteBtn></td>
      </tr>
      <tr>
        <td>5556dhdhjjsh78</td>
        <td>$ 560</td>
        <td>4</td>
        <td>2</td>
        <td><DeleteBtn>Delete</DeleteBtn></td>
      </tr>
    </tbody>
  </Table>
);

export default Rooms;
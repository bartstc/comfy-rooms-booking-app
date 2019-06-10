import React from 'react';
import { Table, DeleteBtn, Warning } from './Rooms.styles.js';

const Rooms = ({ id, rooms }) => {
  if (rooms.length === 0) return <Warning>No rooms have been added yet.</Warning>

  return (
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
        {rooms.map(({ _id, price, adults, children }) => (
          <tr key={_id}>
            <td>{_id}</td>
            <td>$ {price}</td>
            <td>{adults}</td>
            <td>{children}</td>
            <td><DeleteBtn>Delete</DeleteBtn></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

export default Rooms;
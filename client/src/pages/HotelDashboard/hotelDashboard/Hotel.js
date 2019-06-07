import React from 'react';

import { Container, Title, Info, Description, Table, DeleteBtn, AddBtn } from './Hotel.styles';

const Hotel = () => {
  return (
    <Container>
      <Title>Triple Estate Hotel</Title>
      <Description>
        <Info>Handle: <span>tripleestatehotel</span></Info>
        <Info>Type: <span>Apartament</span></Info>
        <Info>Stars: <span>5</span></Info>
        <Info>city: <span>Amsterdam</span></Info>
      </Description>

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
      <AddBtn>Add room</AddBtn>
      {/* MODAL WITH FORM TO ADD HOTELS AND ROOMS!!! */}
    </Container>
  );
};

export default Hotel;
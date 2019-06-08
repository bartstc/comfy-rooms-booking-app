import React from 'react';

import { Table, AcceptBtn, Empty } from './Requests.styles';

const Requests = () => (
  <>
    {/* <Empty>No requests yet.</Empty> */}
    <Table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Email</th>
          <th>Register</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5556dhdhjjsh78</td>
          <td>test@gmail.com</td>
          <td><AcceptBtn>Accept</AcceptBtn></td>
        </tr>
      </tbody>
    </Table>
  </>
)

export default Requests;
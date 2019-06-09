import React from 'react';
import PropTypes from 'prop-types';
import { Table, AcceptBtn, Empty } from './Requests.styles';

const Requests = ({ requests, handleRegister }) => {
  if (requests.length === 0) return <Empty>No requests yet.</Empty>;

  return (
    <Table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Register</th>
        </tr>
      </thead>
      <tbody>
        {requests.map(({ user }) => (
          <tr key={user}>
            <td>{user}</td>
            <td><AcceptBtn onClick={() => handleRegister(user)}>Accept</AcceptBtn></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};

Requests.propTypes = {
  requests: PropTypes.array,
  handleRegister: PropTypes.func.isRequired
};

export default Requests;
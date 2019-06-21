import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import { HistoryWrapper, Table, Empty, Btn } from './History.styles';

const History = ({ handleClickOpen, handlePayment, history }) => {
  const handleOpen = (id) => {
    handleClickOpen(id);
  };

  return (
    <HistoryWrapper>
      {history.length === 0
        ? <Empty>Your history of orders is empty for now.</Empty>
        : <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hotel</th>
              <th>In</th>
              <th>Out</th>
              <th>Total</th>
              <th>Opinion</th>
              <th>Pay</th>
            </tr>
          </thead>

          <tbody>
            {history.map(({ _id, hotelName, total, checkIn, checkOut, paid, rated }) => (
              <tr key={_id}>
                <td>{_id.substring(0, 7)} ...</td>
                <td>{hotelName}</td>
                <td>{moment(checkIn).format('MMMM Do YYYY')}</td>
                <td>{moment(checkOut).format('MMMM Do YYYY')}</td>
                <td>{total} $</td>
                <td className="btn">
                  <Btn onClick={() => handleOpen('111')}>Add</Btn>
                </td>
                <td className="btn">
                  <StripeCheckout
                    // by default: dollars
                    // All API requests expect amounts to be provided in a currency’s smallest unit. For example, to charge $10 USD, provide an amount value of 1000 (i.e, 1000 cents).
                    name="Comfy rooms"
                    description={`To pay: ${total} $`}
                    amount={total * 100}
                    token={token => handlePayment({
                      total,
                      token,
                      orderId: _id
                    })}
                    // publishable key
                    stripeKey="pk_test_EmXEG0tiESh8UILMxSIieKCf00pi77nUtH"
                  >
                    <Btn grayedOut={paid} disabled={paid}>{paid ? 'Paid' : 'Payment'}</Btn>
                  </StripeCheckout>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </HistoryWrapper>
  );
};

History.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
  handlePayment: PropTypes.func.isRequired
};

export default History;
import PropTypes from "prop-types";
import React from "react";

const Transaction = ({ transactions }) => {
  const { id, type, amount, currency } = transactions;
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transaction.propType = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default Transaction;

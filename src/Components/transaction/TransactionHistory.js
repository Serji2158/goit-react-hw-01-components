import PropTypes from "prop-types";
import React from "react";
import s from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propType = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;

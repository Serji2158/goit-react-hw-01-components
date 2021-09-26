import React from "react";
import PropTypes from "prop-types";
import s from "./StatisticalData.module.css";

const StatisticalData = ({ statItem }) => {
  const { label, percentage } = statItem;
  return (
    <li className={s.statItem}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

StatisticalData.propType = {
  statItem: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default StatisticalData;

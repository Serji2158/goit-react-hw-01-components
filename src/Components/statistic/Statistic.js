import PropTypes from "prop-types";
import React from "react";

const Statistic = ({ statdata }) => {
  const { id, label, percentage } = statdata;
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list" key={id}>
        {statdata.map((st) => (
          <li class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propType = {
  statdata: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      lable: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistic;

import React from "react";
import PropTypes from "prop-types";
import StatisticalData from "./statisticalData/StatisticalData";
import s from "./Statistic.module.css";

const Statistic = ({ title, statdata }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 class={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statList}>
        {statdata.map((statItem) => (
          <StatisticalData statItem={statItem} key={statdata.id} />
        ))}
      </ul>
    </section>
  );
};

Statistic.propType = {
  title: PropTypes.string,
  statdata: PropTypes.arrayOf(
    PropTypes.shape({
      lable: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistic;

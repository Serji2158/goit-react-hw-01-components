// import PropTypes from "prop-types";
import React from "react";
import StatisticalData from "./statisticalData/StatisticalData";
import s from "./Statistic.module.css";

const Statistic = ({ title, statdata }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 class={s.title}>UPLOAD STATS</h2>}

      <ul className={s.statList}>
        {statdata.map((statItem) => (
          <StatisticalData statItem={statItem} />
        ))}
      </ul>
    </section>
  );
};

export default Statistic;

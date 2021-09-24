import PropTypes from "prop-types";
import React from "react";
import s from "./Profile.module.css";

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={avatar} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.statistic}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={s.statItem} key={value}>
            <span className={s.label}>{key}</span>
            <span className={s.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

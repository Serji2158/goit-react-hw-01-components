import PropTypes from "prop-types";
import React from "react";

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={avatar} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="statistic">
        {Object.entries(stats).map(([key, value]) => (
          <li key={value}>
            <span class="label">{key}</span>
            <span class="quantity">{value}</span>
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

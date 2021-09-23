import React from "react";
import PropTypes from "prop-types";

const FriendsListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={id} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendsListItem.propType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsListItem;

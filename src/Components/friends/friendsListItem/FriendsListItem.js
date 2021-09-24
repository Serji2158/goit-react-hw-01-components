import React from "react";
import PropTypes from "prop-types";
import s from "./FriendsListItem.module.css";

const FriendsListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li class={s.item} key={id}>
      <span class={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline}
      </span>
      <img class={s.avatar} src={avatar} alt={id} width="48" />
      <p class={s.name}>{name}</p>
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

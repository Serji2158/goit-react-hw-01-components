import React from "react";
import PropTypes from "prop-types";
import s from "./FriendsListItem.module.css";

const FriendsListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={id} width="48" />
      <p className={s.name}>{name}</p>
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

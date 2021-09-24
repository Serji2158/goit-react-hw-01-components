import PropTypes from "prop-types";
import React from "react";
import FriendsListItem from "./friendsListItem/FriendsListItem";

const Friends = ({ friends }) => {
  return (
    <ul class="list">
      {friends.map((friend) => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

Friends.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default Friends;

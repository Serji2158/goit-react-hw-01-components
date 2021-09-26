import React from "react";
import Profile from "./profile/Profile";
import Friends from "./friends/Friends";
import Statistic from "./statistic/Statistic";
import TransactionHistory from "./transaction/TransactionHistory";

import user from "../data/user.json";
import friends from "../data/friends.json";
import statdata from "../data/statdata.json";
import transactions from "../data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Friends friends={friends} />
      <Statistic statdata={statdata} title="Upload stats" />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

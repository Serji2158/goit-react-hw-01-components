import React from "react";
import Profile from "./profile/Profile";
import Friends from "./friends/Friends";
// import Statistic from "./statistic/Statistic";
import Transaction from "./transaction/Transaction";

import user from "../data/user.json";
import friends from "../data/friends.json";
// import statdata from "../data/statdata.json";
import transactions from "../data/transactions.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Friends friends={friends} />
      {/* <Statistic statdata={statdata} /> */}
      <Transaction transactions={transactions} />
    </>
  );
};

export default App;

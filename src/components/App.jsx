import s from "./App.module.css";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
const App = () => {
  return (
    <>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Profile</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Friends</h2>
        <FriendList friends={friends} />
      </div>
      <div className={s.taskSection}>
        <h2 className={s.heading}>Transaction History</h2>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;

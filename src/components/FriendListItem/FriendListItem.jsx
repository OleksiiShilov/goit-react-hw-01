import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src={avatar}
        alt={`Friend avatar - ${name}`}
        width="48"
      />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.status, isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

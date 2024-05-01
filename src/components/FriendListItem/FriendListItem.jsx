import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.thumb}>
      <img className={s.img} src={avatar} alt={`${name} avatar`} width="48" />
      <p className={s.title}>{name}</p>
      <p className={clsx(s.sub_title, isOnline ? s.is_online : s.is_offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

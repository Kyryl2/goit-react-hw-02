import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p> <p>@{tag}</p> <p>{location}</p>
      </div>
      <ul className={css.listInfo}>
        <li className={css.itemInfo}>
          <span>Followers</span>{" "}
          <span className={css.itemName}>{stats.followers}</span>
        </li>
        <li className={css.itemInfo}>
          <span>Views</span> <span className={css.itemName}>{stats.views}</span>
        </li>
        <li className={css.itemInfo}>
          <span>Likes</span> <span className={css.itemName}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

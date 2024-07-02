import s from "./Profile.module.css";
import { FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.userData}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.numbers}>
            <FaUser size="20" color="teal" />
            {stats.followers}
          </span>
        </li>

        <li className={s.item}>
          <span>Views</span>
          <span className={s.numbers}>
            <IoEyeSharp size="20" color="teal" />
            {stats.views}
          </span>
        </li>

        <li className={s.item}>
          <span>Likes</span>
          <span className={s.numbers}>
            <BiSolidLike size="20" color="teal" />
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

import BellIcon from "../../SvgIcons/BellIcon";
import styles from "./NotificationIcon.module.css";

const NotificationIcon = ({ notifications = 5 }) => {
  Number(notifications);
  return (
    <div className={`${styles.notificationIconWrapper}`}>
      {notifications > 10 ? (
        <span>10+</span>
      ) : notifications > 0 ? (
        <span>{notifications}</span>
      ) : null}
      <BellIcon size="28" />
    </div>
  );
};

export default NotificationIcon;

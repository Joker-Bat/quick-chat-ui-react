import { useMemo } from "react";
import classes from "./Activity.module.scss";

import { useSelector } from "react-redux";
import { format } from "date-fns";

/**
 *
 * @returns Activity
 */
const Activity = () => {
  const { selectedUserId, friends } = useSelector((state) => state.user);

  const currentUser = useMemo(() => {
    const filteredUsers = friends.filter(
      (friend) => friend.id === selectedUserId
    );
    if (filteredUsers.length > 0) return filteredUsers[0];
    return {};
  }, [selectedUserId, friends]);

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <h1>Current Week</h1>
        <p>Activity</p>
      </div>

      <div className={classes.Activity}>
        {currentUser.activity.map((item) => {
          const curWeekName = format(new Date(), "E").toUpperCase();
          return (
            <div
              key={item.day}
              className={`${classes.Bar} ${
                item.day === curWeekName ? classes.Active : ""
              }`}
            >
              <div
                className={classes.Line}
                style={{ height: `${item.percentage}%` }}
              ></div>
              <div className={classes.Circle}></div>
              <div className={classes.Label}>{item.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;

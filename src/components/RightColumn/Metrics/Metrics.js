import { useMemo } from "react";
import classes from "./Metrics.module.scss";

import { BiTimeFive } from "react-icons/bi";
import { RiGroupLine, RiChatOffLine } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

import Activity from "./Activity/Activity";

const CELL_TYPE = {
  TIME: classes.Time,
  ATTENDED: classes.Attended,
  MEETINGS: classes.Meetings,
  REJECTED: classes.Rejected,
};

/**
 *
 * @param
 * @returns Cell
 */
const Cell = ({ icon, title, description, type }) => {
  const Icon = icon;
  return (
    <div className={`${classes.Cell} ${type}`}>
      <div className={classes.Icon}>
        <Icon />
      </div>
      <div className={classes.Details}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 *
 * @returns Metrics
 */
const Metrics = () => {
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
      <div className={classes.Metrics}>
        <div className={classes.Row}>
          <Cell
            icon={BiTimeFive}
            title={currentUser.time}
            description="Time"
            type={CELL_TYPE.TIME}
          />
          <Cell
            icon={RiGroupLine}
            title={currentUser.attended}
            description="Attended"
            type={CELL_TYPE.ATTENDED}
          />
        </div>
        <div className={classes.Row}>
          <Cell
            icon={BsCalendarCheck}
            title={currentUser.meetings}
            description="Meetings"
            type={CELL_TYPE.MEETINGS}
          />
          <Cell
            icon={RiChatOffLine}
            title={currentUser.rejected}
            description="Rejected"
            type={CELL_TYPE.REJECTED}
          />
        </div>
      </div>
      <div className={classes.Activity}>
        <Activity />
      </div>
    </div>
  );
};

export default Metrics;

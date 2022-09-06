import classes from "./RightColumn.module.scss";

import { useSelector } from "react-redux";

import UserDetails from "./UserDetails/UserDetails";
import Metrics from "./Metrics/Metrics";
import Onboard from "./Onboard/Onboard";

/**
 *
 * @returns RightColumn
 */
const RightColumn = () => {
  const { selectedUserId } = useSelector((state) => state.user);

  return (
    <div className={classes.Container}>
      {selectedUserId !== 0 && (
        <>
          <div className={classes.UserDetails}>
            <UserDetails />
          </div>
          <div className={classes.Metrics}>
            <Metrics />
          </div>
          <div className={classes.Onboard}>
            <Onboard />
          </div>
        </>
      )}
    </div>
  );
};

export default RightColumn;

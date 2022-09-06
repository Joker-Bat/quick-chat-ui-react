import { useState } from "react";
import classes from "./Profile.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { RiSettings4Line } from "react-icons/ri";

import { toggleActive } from "../../../store/user/user";
import Checkbox from "../../UIComponents/Checkbox/Checkbox";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

/**
 *
 * @returns Profile
 */
const Profile = () => {
  const dispatch = useDispatch();

  const { name, status, isActive, picture } = useSelector(
    (state) => state.user
  );

  const [showUpdateProfileModel, setShowUpdateProfileModel] = useState(false);

  return (
    <>
      {showUpdateProfileModel && (
        <UpdateProfile handleClose={() => setShowUpdateProfileModel(false)} />
      )}

      <div className={classes.Container}>
        <div className={classes.Image}>
          <img src={picture} alt={name} />
        </div>
        <div className={classes.Name}>
          <h1>{name}</h1>
          <span
            className={classes.Icon}
            onClick={() => setShowUpdateProfileModel(true)}
          >
            <RiSettings4Line />
          </span>
        </div>
        <p className={classes.Description}>{status}</p>
        <div className={classes.Active}>
          <div className={classes.Checkbox}>
            <Checkbox
              checked={isActive}
              onChange={() => dispatch(toggleActive())}
            />
          </div>
          <p className={classes.Label}>{isActive ? "Active" : "Inactive"}</p>
        </div>
      </div>
    </>
  );
};

export { Profile };

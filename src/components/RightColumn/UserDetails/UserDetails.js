import classes from "./UserDetails.module.scss";

import { FiMail } from "react-icons/fi";
import { HiOutlineArchive } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

import { useSelector, useDispatch } from "react-redux";

import { toggleArchiveUser } from "../../../store/user/user";

import Button from "../../UIComponents/Button/Button";
import { useMemo } from "react";
import { getUserNameFirstLetters } from "../../../utils/helperFunctions";

/**
 *
 * @param Detail
 * @returns
 */

const Detail = ({ icon, text }) => {
  const Icon = icon;
  return (
    <div className={classes.Detail}>
      <span className={classes.Icon}>
        <Icon />
      </span>
      <p className={classes.Text}>{text}</p>
    </div>
  );
};

/**
 *
 * @returns UserDetails
 */
const UserDetails = () => {
  const dispatch = useDispatch();
  const { selectedUserId, friends } = useSelector((state) => state.user);

  const currentUser = useMemo(() => {
    const filteredUsers = friends.filter(
      (friend) => friend.id === selectedUserId
    );
    if (filteredUsers.length > 0) {
      return filteredUsers[0];
    }
    return {};
  }, [selectedUserId, friends]);

  return (
    <div className={classes.Container}>
      <div className={classes.NameIcon}>
        <h1>{getUserNameFirstLetters(currentUser.name)}</h1>
      </div>

      <Detail icon={FiMail} text={currentUser.email} />
      <Detail icon={CgProfile} text={currentUser.name} />

      <div className={classes.Button}>
        <Button
          title={currentUser.isArchived ? "Unarchive" : "Archive"}
          icon={HiOutlineArchive}
          outlined={!currentUser.isArchived}
          onClick={() => dispatch(toggleArchiveUser())}
          large
        />
      </div>
    </div>
  );
};

export default UserDetails;

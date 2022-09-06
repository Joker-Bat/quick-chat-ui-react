import classes from "./Conversation.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUserId } from "../../../../store/user/user";

/**
 *
 * @returns Conversation
 */
const Conversation = ({ friend }) => {
  const { selectedUserId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangeSelectedUser = (id) => {
    if (selectedUserId === id) return;
    dispatch(changeSelectedUserId({ id }));
  };

  return (
    <div
      className={`${classes.Conversation} ${
        selectedUserId === friend.id ? classes.Active : ""
      } `}
      onClick={() => handleChangeSelectedUser(friend.id)}
    >
      <div className={classes.Image}>
        <img src={friend.picture} alt={friend.name} />
      </div>
      <h1 className={classes.Name}>{friend.name}</h1>
      {friend.newMessages > 0 && (
        <div className={classes.NewMessageCount}>{friend.newMessages}</div>
      )}
    </div>
  );
};

export default Conversation;

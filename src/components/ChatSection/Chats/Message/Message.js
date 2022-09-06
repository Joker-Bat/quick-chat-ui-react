import classes from "./Message.module.scss";

import { getTimeAgo } from "../../../../utils/helperFunctions";

const MESSAGE_TYPE = {
  SENT: "SENT",
  RECEIVED: "RECEIVED",
};

/**
 *
 * @returns Message
 */
const Message = ({ chat, currentFriend, currentUser }) => {
  return (
    <div
      className={`${classes.Container} ${
        chat.type === MESSAGE_TYPE.SENT ? classes.Sent : classes.Received
      }`}
    >
      <div className={classes.MessageContainer}>
        <div className={classes.Message}>
          <p>{chat.message}</p>
        </div>
        <p className={classes.Timestamp}>{getTimeAgo(chat.timestamp)}</p>
      </div>
      <div className={classes.Picture}>
        {chat.type === MESSAGE_TYPE.SENT ? (
          <img src={currentUser.picture} alt={currentUser.name} />
        ) : (
          <img src={currentFriend.picture} alt={currentFriend.name} />
        )}
        <span className={classes.ActiveFlag}></span>
      </div>
    </div>
  );
};

export default Message;

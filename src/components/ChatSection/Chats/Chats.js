import { useMemo } from "react";
import classes from "./Chats.module.scss";

import { useSelector } from "react-redux";

import Message from "./Message/Message";

/**
 *
 * @returns Chats
 */
const Chats = () => {
  const { selectedUserId, friends, picture, name } = useSelector(
    (state) => state.user
  );

  const currentFriend = useMemo(() => {
    if (selectedUserId === 0) return null;
    return friends.filter((friend) => friend.id === selectedUserId)[0];
  }, [selectedUserId, friends]);

  return (
    <div className={classes.Container}>
      {!currentFriend ? (
        <div className={classes.NoConversation}>
          <h1>Select a conversation</h1>
        </div>
      ) : (
        <>
          {currentFriend.chats?.map((chat) => {
            return (
              <div key={chat.id} className={classes.Message}>
                <Message
                  chat={chat}
                  currentFriend={currentFriend}
                  currentUser={{ picture, name }}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Chats;

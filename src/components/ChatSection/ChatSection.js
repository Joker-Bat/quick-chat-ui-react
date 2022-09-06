import { useRef, useEffect } from "react";
import classes from "./ChatSection.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { sendMessage } from "../../store/user/user";
import Chats from "./Chats/Chats";
import ChatInput from "./ChatInput/ChatInput";

/**
 *
 * @returns
 */

const ChatSection = () => {
  const dispatch = useDispatch();
  const { friends, selectedUserId } = useSelector((state) => state.user);
  const prevUserId = useRef("");

  const chatsContainerRef = useRef();

  useEffect(() => {
    chatsContainerRef.current?.scrollTo({
      top: chatsContainerRef.current?.scrollHeight,
      behavior: prevUserId.current === selectedUserId ? "smooth" : "auto",
    });

    prevUserId.current = selectedUserId;
  }, [friends, selectedUserId]);

  const handleSendMessage = (message) => {
    dispatch(sendMessage({ message }));
  };

  return (
    <div className={classes.Container}>
      {selectedUserId === 0 ? (
        <div className={classes.NoConversation}>
          <h1>Select a conversation</h1>
        </div>
      ) : (
        <>
          <div className={classes.ChatSpace} ref={chatsContainerRef}>
            <Chats />
          </div>

          <div className={classes.ChatInput}>
            <ChatInput sendMessage={handleSendMessage} />
          </div>
        </>
      )}
    </div>
  );
};

export { ChatSection };

import { useState } from "react";
import classes from "./ChatInput.module.scss";

import { AiOutlinePaperClip } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

import Button from "../../UIComponents/Button/Button";

/**
 *
 * @returns ChatInput
 */

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "") return;

    sendMessage(message);
    setMessage("");
  };

  return (
    <form className={classes.Container} onSubmit={handleSubmit}>
      <div className={classes.FileIcon}>
        <AiOutlinePaperClip />
      </div>
      <div className={classes.Input}>
        <input
          type="text"
          placeholder="Enter your message here"
          value={message}
          onChange={handleChangeMessage}
        />
        <div className={classes.EmojiIcon}>
          <BsEmojiSmile />
        </div>
      </div>
      <div className={classes.Button}>
        <Button title="Send" icon={IoMdSend} type="submit" />
      </div>
    </form>
  );
};

export default ChatInput;

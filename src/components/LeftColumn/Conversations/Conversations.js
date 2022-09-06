import { useState, useCallback } from "react";
import classes from "./Conversations.module.scss";

import Conversation from "./Conversation/Conversation";

import { HiChevronDown } from "react-icons/hi";

/**
 *
 * @param {Object} p
 * @param {Array} p.friends
 * @param {String} p.string
 * @param {Boolean} p.initialOpen
 * @returns
 */
const Conversations = ({ friends, label, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [conversationHeight, setConversationHeight] = useState(0);

  const handleConverstionHeight = useCallback(
    (node) => {
      setConversationHeight(node?.offsetHeight);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [friends.length]
  );

  return (
    <div className={classes.Container}>
      <div className={classes.Label} onClick={() => setIsOpen((p) => !p)}>
        <div className={classes.Left}>
          <h1 className={classes.Name}>{label}</h1>
          <span className={classes.Count}>{friends.length}</span>
        </div>
        <span className={`${classes.Right} ${isOpen ? classes.Open : ""}`}>
          <HiChevronDown />
        </span>
      </div>

      <div
        className={classes.SectionContainerWrapper}
        style={{ height: isOpen ? `${conversationHeight}px` : "0px" }}
      >
        <div className={classes.SectionContainer} ref={handleConverstionHeight}>
          {friends.map((friend) => {
            return (
              <div key={friend.id} className={classes.Conversation}>
                <Conversation friend={friend} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Conversations };

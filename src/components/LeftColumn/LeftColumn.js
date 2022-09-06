import { useMemo } from "react";
import classes from "./LeftColumn.module.scss";

import { Logo } from "./Logo/Logo";
import { Profile } from "./Profile/Profile";
import { Conversations } from "./Conversations/Conversations";

import { useSelector } from "react-redux";

/**
 *
 * @returns LeftColumn
 */
const LeftColumn = () => {
  const { friends } = useSelector((state) => state.user);

  const { activeConversations, archivedConversations } = useMemo(() => {
    const activeConversations = [];
    const archivedConversations = [];

    for (let friend of friends) {
      if (friend.isArchived === true) archivedConversations.push(friend);
      if (friend.isArchived === false) activeConversations.push(friend);
    }

    return { activeConversations, archivedConversations };
  }, [friends]);

  return (
    <div className={classes.LeftColumn}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Profile}>
        <Profile />
      </div>
      <div className={classes.Conversations}>
        <Conversations
          friends={activeConversations}
          label="Active Conversations"
          initialOpen={true}
        />
      </div>
      <div className={classes.Conversations}>
        <Conversations
          friends={archivedConversations}
          label="Archived Conversations"
        />
      </div>
    </div>
  );
};

export { LeftColumn };

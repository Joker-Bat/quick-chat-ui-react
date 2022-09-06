import { useState, useEffect, useMemo } from "react";
import classes from "./ChatApp.module.scss";

import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { LeftColumn } from "../../components/LeftColumn";
import { ChatSection } from "../../components/ChatSection";
import RightColumn from "../../components/RightColumn/RightColumn";

/**
 *
 * @returns ChatApp
 */
const ChatApp = () => {
  const { selectedUserId, friends } = useSelector((state) => state.user);

  const [showRightColumn, setShowRightColumn] = useState(false);
  const [showLeftColumn, setShowLeftColumn] = useState(false);

  const currentFriend = useMemo(() => {
    if (selectedUserId === 0) return null;
    const filteredFriends = friends.filter(
      (friend) => friend.id === selectedUserId
    );
    return filteredFriends.length > 0 ? filteredFriends[0] : {};
  }, [selectedUserId, friends]);

  useEffect(() => {
    setShowLeftColumn((p) => !p);
  }, [selectedUserId]);

  return (
    <main className={classes.Container}>
      <aside
        className={`${classes.LeftColumn} ${
          showLeftColumn ? classes.Show : ""
        }`}
      >
        <LeftColumn />
      </aside>

      <section
        className={classes.ChatSection}
        onClick={(e) => {
          e.stopPropagation();
          setShowLeftColumn(false);
          setShowRightColumn(false);
        }}
      >
        <div className={classes.Header}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowRightColumn(false);
              setShowLeftColumn((p) => !p);
            }}
          >
            <AiOutlineArrowLeft />
          </button>
          {selectedUserId !== 0 && (
            <h1
              onClick={(e) => {
                e.stopPropagation();
                setShowLeftColumn(false);
                setShowRightColumn((p) => !p);
              }}
            >
              {currentFriend?.name}
            </h1>
          )}
          {/* <button
              onClick={(e) => {
                e.stopPropagation();
                setShowLeftColumn(false);
                setShowRightColumn((p) => !p);
              }}
            >
              <AiOutlineArrowRight />
            </button> */}
        </div>
        <ChatSection />
      </section>

      <aside
        className={`${classes.RightColumn} ${
          showRightColumn ? classes.Show : ""
        }`}
      >
        <RightColumn />
      </aside>
    </main>
  );
};

export { ChatApp };

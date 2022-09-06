import { createSlice } from "@reduxjs/toolkit";

import userData from "../../assets/data.json";

const MESSAGE_TYPE = {
  SENT: "SENT",
  RECEIVED: "RECEIVED",
};

const userSlice = createSlice({
  name: "chat",
  initialState: userData,
  reducers: {
    toggleActive: (state) => {
      state.isActive = !state.isActive;
    },

    changeSelectedUserId: (state, { payload }) => {
      state.selectedUserId = payload.id;
    },

    toggleArchiveUser: (state) => {
      state.friends = state.friends.map((friend) => {
        if (friend.id === state.selectedUserId) {
          friend.isArchived = !friend.isArchived;
        }
        return friend;
      });
    },

    sendMessage: (state, { payload }) => {
      if (state.selectedUserId === 0) return state;

      const currentFriend = state.friends.filter(
        (friend) => friend.id === state.selectedUserId
      )[0];

      currentFriend.chats.push({
        id: currentFriend.chats.length + 1,
        message: payload.message,
        timestamp: new Date().toJSON(),
        type: MESSAGE_TYPE.SENT,
      });

      // return state;
    },
  },
});

export const {
  addInitialState,
  toggleActive,
  changeSelectedUserId,
  toggleArchiveUser,
  sendMessage,
} = userSlice.actions;

export default userSlice.reducer;

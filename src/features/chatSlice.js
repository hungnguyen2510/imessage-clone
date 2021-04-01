import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: null,
    chatName: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});

export const { setChat } = chatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;
export const useChatId = () => useSelector(selectChatId);
export const useChatName = () => useSelector(selectChatName);

export default chatSlice.reducer;

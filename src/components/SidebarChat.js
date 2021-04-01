import React from "react";
import { Avatar } from "@material-ui/core";
import "../SidebarChat.css";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setChat({ chatId: id, chatName: chatName }));
      }}
      className="sidebar_chat"
    >
      <Avatar />
      <div className="sidebarChat_infor">
        <h3>{chatName}</h3>
        <p>Last message...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;

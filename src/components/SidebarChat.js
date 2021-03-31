import React from "react";
import { Avatar } from "@material-ui/core";
import "../SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebar_chat">
      <Avatar />
      <div className="sidebarChat_infor">
        <h3>Channel Name</h3>
        <p>Last message...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;

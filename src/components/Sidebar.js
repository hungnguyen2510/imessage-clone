import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import SidebarChat from "./SidebarChat";
import "../Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar className="sidebar_avata" />
        <div className="sider_input">
          <SearchIcon />
          <input type="text" className="" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />

      </div>
    </div>
  );
};

export default Sidebar;

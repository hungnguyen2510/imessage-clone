import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SidebarChat from "./SidebarChat";
import "../Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { useUser } from "../features/userSlice";
import db, { auth } from "../firebase";

const Sidebar = () => {
  const user = useUser();
  const [chats, setChats] = useState([]);
  useEffect(() => {
    db.collection("chat").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar_avata"
        />
        <div className="sider_input">
          <SearchIcon />
          <input type="text" className="" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar_chats">
        {chats.map(({ id, data: { chatName } }) => {
          <SidebarChat />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;

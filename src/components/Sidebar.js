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
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt("please enter chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

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
        <IconButton
          variant="outlined"
          className="sidebar_inputButton"
          onClick={addChat}
        >
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar_chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

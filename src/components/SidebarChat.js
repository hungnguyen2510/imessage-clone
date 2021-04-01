import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../SidebarChat.css";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
import db from "../firebase";
import * as timeago from "timeago.js";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    return db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() => {
        dispatch(setChat({ chatId: id, chatName: chatName }));
      }}
      className="sidebar_chat"
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebarChat_infor">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;

import React, { useState, useEffect } from "react";
import "../Chat.css";
import Message from "./Message";
import { useChatId, useChatName } from "../features/chatSlice";
import db from "./../firebase";
import firebase from "firebase";
import { useUser } from "./../features/userSlice";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const user = useUser();
  const chatName = useChatName();
  const chatId = useChatId();

  useEffect(() => {
    if (chatId) {
      return db
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    //Firebase...
    setInput("");
  };
  return (
    <div className="chat">
      {/* Chat Header */}
      <div className="chat_header">
        <h4>
          To: <span className="chat_channelName">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Chat Messages */}
      <div className="chat_messages">
        {messages.map(({ id, data }) => (
          <Message key={id} content={data} />
        ))}
      </div>
      {/* Chat Input */}
      <div className="chat_input">
        <form action="">
          <input
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>Send Messages</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

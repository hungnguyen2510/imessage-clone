import React, { useState } from "react";
import "../Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import {IconButton} from "@material-ui/core"

const Chat = () => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(message);
    //Firebase...
    setMessage("");
  };
  return (
    <div className="chat">
      {/* Chat Header */}
      <div className="chat_header">
        <h4>
          To: <span className="chat_channelName">Mer</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* Chat Messages */}
      <div className="chat_messages">
          <h2>message</h2>
      </div>
      {/* Chat Input */}
      <div className="chat_input">
        <form action="">
          <input
            placeholder="iMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage}>Send Messages</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat_mic"></MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;

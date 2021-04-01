import React from "react";
import "../Messages.css";
import { Avatar } from "@material-ui/core";
import { useUser } from "../features/userSlice";

const Message = ({
  id,
  content: { displayName, email, message, photo, uid, timestamp },
}) => {
  const user = useUser();
  return (
    <div className={`message ${user.email === email && "message_sender"}`}>
      <Avatar src={photo} className="message_photo"></Avatar>
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
};
export default Message;

import React from "react";
import Sidebar from "./Sidebar";
import "../Imessage.css";
import Chat from "./Chat";

const Imessage = () => {
  
  return (
    <div className="iMessage">
      {/*Sidebar */}
      <Sidebar />
      {/*Chat */}
      <Chat />
    </div>
  );
};

export default Imessage;

import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Imessage from "./components/Imessage";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <div className="App">{user ? <Imessage /> : <Login/>}</div>
  );
}

export default App;

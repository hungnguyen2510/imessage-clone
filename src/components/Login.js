import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "../Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://images.macrumors.com/t/d2hXKur-dfhfec7aE1mXsjKVgEY=/1600x0/article-new/2016/03/IMessage_Icon.jpg"
          alt="login_logo"
        />
        <h1>iMessage</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Imessage from "./components/Imessage";
import { login, logout, useIsLoading, useUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import { CircularProgress } from "@material-ui/core";

function App() {
  const user = useUser();
  const isLoading = useIsLoading();
  const dispatch = useDispatch();
  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }
  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}

export default App;

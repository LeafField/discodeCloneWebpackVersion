import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelecter } from "./app/hooks";
import Chat from "./compornents/chat/Chat";
import Login from "./compornents/login/Login";
import Sidebar from "./compornents/sidebar/Sidebar";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

const App = () => {
  const user = useAppSelecter((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};

export default App;

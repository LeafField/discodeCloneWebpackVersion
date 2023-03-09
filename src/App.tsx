import React from "react";
import "./App.scss";
import Chat from "./compornents/chat/Chat";
import Sidebar from "./compornents/sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
};

export default App;

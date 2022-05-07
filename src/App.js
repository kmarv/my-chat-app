import React from "react";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a29a7365-986c-4541-a037-b7eca39e4141"
      userName="marv"
      userSecret="qwerty"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
};

export default App;

import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";
import { Timestamp } from "firebase/firestore";

type Props = {
  timestamp: Timestamp;
  messages: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessage = (props: Props) => {
  const { messages, timestamp, user } = props;

  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="messageInfo">
        <h4>
          {user?.displayName}
          <span className="messageTimeStamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>

        <p>{messages}</p>
      </div>
    </div>
  );
};

export default ChatMessage;

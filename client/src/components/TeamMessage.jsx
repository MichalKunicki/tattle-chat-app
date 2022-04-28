import React from "react";
import { MessageSimple, useMessageContext } from "stream-chat-react";

// Changed MessageTeam deprecated component to MessageSimple

const TeamMessage = () => {
  const { handleOpenThread, message } = useMessageContext();
  console.log(handleOpenThread);

  return <MessageSimple message={{ ...message, user: {} }} />;
};

export default TeamMessage;

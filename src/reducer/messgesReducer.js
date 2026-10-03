export const reducer = function (state, actions) {
  switch (actions.type) {
    case "seen":
      return state.map((chat) => {
        return chat.id === actions.id
          ? { ...chat, isUnread: actions.newValue }
          : chat;
      });
    case "add":
      return state.map((chat) => {
        console.log(actions.payload);
        return chat.id === actions.payload.chatId
          ? { ...chat, messages: [...chat.messages, actions.payload] }
          : chat;
      });
    default:
      return state;
  }
};

export const reducer = function (state, actions) {
  switch (actions.type) {
    case "see":
      return state.map((chat) => {
        return chat.id === actions.id
          ? { ...chat, isUnread: actions.newValue }
          : chat;
      });
    default:
      return state;
  }
};

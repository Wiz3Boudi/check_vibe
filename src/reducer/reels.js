export const reels = (state, actions) => {
  switch (actions.type) {
    case "like":
      return state.map((post) =>
        post.id === actions.payload.id
          ? {
              ...post,
              likesCount: post.isLiked
                ? post.likesCount - 1
                : post.likesCount + 1,
              isLiked: !post.isLiked,
            }
          : post,
      );
    default:
      return state;
  }
};

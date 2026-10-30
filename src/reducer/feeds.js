export const updatePostsReducer = function (state, action) {
  console.log("action");
  switch (action.type) {
    case "decrease":
      return state.map((post) => {
        return post.id === action.id
          ? {
              ...post,
              likesCount: Number(post.likesCount || 0) - 1,
              isLiked: false,
            }
          : post;
      });
    case "increase":
      return state.map((post) => {
        return post.id === action.id
          ? {
              ...post,
              likesCount: Number(post.likesCount || 0) + 1,
              isLiked: true,
            }
          : post;
      });
    case "save":
      return state.map((post) =>
        post.id === action.id ? { ...post, isSaved: !post.isSaved } : post,
      );
    case "post":
      return [...state, action.payload];
    case "COMMENT_LIKES":
      const { commentId, postId } = action;
      return state.map((post) => {
        return post.id === postId
          ? post.comments.map((comment) => {
              return comment.id === commentId
                ? {
                    ...comment,
                    likesCount: comment.isLiked
                      ? comment.likesCount - 1
                      : comment.likesCount + 1,
                    isLiked: !comment.isLiked,
                  }
                : comment;
            })
          : post;
      });
    default:
      return state;
  }
};

export const updatePostsReducer = function (state, action) {
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
        if (post.id !== postId) return post;
        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.id !== commentId) return comment;
            return {
              ...comment,
              likesCount: comment.isLiked
                ? comment.likesCount - 1
                : comment.likesCount + 1,
              isLiked: !comment.isLiked,
            };
          }),
        };
      });
    case "ADD_COMMENT":
      const { POST_ID, payload } = action;
      return state.map((post) => {
        return post.id === POST_ID
          ? {
              ...post,
              comments: [...post.comments, payload],
              commentsCount: post.commentsCount++,
            }
          : post;
      });
    default:
      return state;
  }
};

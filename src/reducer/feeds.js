export const  updatePostsReducer = function (state, action){
    switch(action.type){
        case "decrease":
            return state.map((post)=>{
                return post.id === action.id 
                    ? {...post, likesCount: Number(post.likesCount || 0) -1, isLiked: false}
                    : post
            });
        case "increase":
            return state.map((post)=>{
                return post.id === action.id
                    ? {...post, likesCount: Number(post.likesCount || 0) +1, isLiked: true }
                    : post
            });
        case 'save':
            return state.map(post => 
                post.id === action.id
                ? {...post, isSaved: !post.isSaved}
                : post
            );
        default:
            return state;
    }
}
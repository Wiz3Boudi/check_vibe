export const postAPost = ({ visualLiveUrl, inputValues, tags }) => {
  return {
    type: "post",
    payload: {
      id: crypto.randomUUID(),
      username: "Current User",
      location: inputValues.location || "Egypt/Cairo",
      avatarUrl: visualLiveUrl,
      images: [visualLiveUrl],
      likesCounts: 0,
      isLiked: false,
      isSaved: false,
      isLiked: false,
      bio: "Hey my name is Rata, I'm a model text me or comment on one of my posts",
      caption:
        inputValues.caption ||
        "This is test so I want to write as many as I can to test many different things and I'm very positive about it , yeah let us go",
      timestamp: "JUST NOW",
      commentsCount: 0,
      connectingInfo: [
        {
          id: crypto.randomUUID(),
          text: "POST",
          count: 342,
        },
        {
          id: crypto.randomUUID(),
          text: "FOLLOWERS",
          count: 12500,
        },
        {
          id: crypto.randomUUID(),
          text: "FOLLOWING",
          count: 489,
        },
      ],
      comments: [
        {
          id: crypto.randomUUID(),
          username: "kenji_tokyo",
          avatarUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBig7tOHd6UnxgoGPDs8dksGE8tHPccgVNrNURVG9Y2emIqSn3j-lkyb0bp90eE9hxiop_LRRH3dTWQ7Zqf-BZerDGD-UM3SOsiMkRcKDOFuqPsEzBXhfboOaGGMqJidLtyvmWmbhozxgEiQ0ZiiG4iXEDUylkjnWAwL9e0zh60S3por2ng3Ob1YHNwq6ty3Dwlzv9e3kTJSu-qiUHATNOaA66hvWnOT7sdes3sIkSGQQWLSG5OUO7A1g",
          text: "Welcome back to Shinjuku Gyoen! Best time of year!",
          timestamp: "1h ago",
          likesCount: 14,
        },
        {
          id: crypto.randomUUID(),
          username: "arivera_vibes",
          avatarUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDSVC6ckn6cYJcatbZr_hK_rhnKbreUvDzuyEfWFkvinowbM18-XBQFTL4UQInZ3Y_tmWV5SVJRKe22lVBoRLvPoixuD_YkKvlGwKu7TFu3WeQdW4vFGeVKlQ5eApGDxF46KLWR5agMnPK1z-gNZKqq1bH02mCr_RLeaXzr4cj4wV0M-oNzA6vdsRt9QhS_UA7AG4IuA8onLso4_nKdC1t8tlpJFrwgYO1f74amchDgGu1_X0j8rzIEPA",
          text: "This color palette is pure magic! ✨",
          timestamp: "45m ago",
          likesCount: 8,
        },
      ],
      tags: [...tags],
    },
  };
};

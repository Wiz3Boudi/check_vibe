export const postDigitsFormater = (likesCount, commentsCount, sharesCount) => {
  const likes = (likesCount) => {
    if (likesCount > +1e3) return (likesCount / 1000).toFixed(1) + "K";
    if (likesCount > +1e6) return (likesCount / 1e6).toFixed(1) + "M";
    if (likesCount > +1e9) return (likesCount / 1000000000).toFixed(1) + "B";
    return likesCount.toFixed(3);
  };

  const comments = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(commentsCount);

  const shares = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(sharesCount);
  return { likes: likes(likesCount), comments, shares };
};

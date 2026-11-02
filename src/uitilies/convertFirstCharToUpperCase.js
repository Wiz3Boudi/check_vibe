export const convertFirstCharToUpperCase = function (name) {
  return name
    .split("")
    .map((item, index) => {
      return index === 0 ? item.toUpperCase() : item;
    })
    .join("");
};

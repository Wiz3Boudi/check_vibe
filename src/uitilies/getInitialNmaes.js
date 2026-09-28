export const getInitialNames = (name = "") => {
  if (!name) return "";

  const trimmed = name.trim();
  if (trimmed.length < 1) return "";

  const words = trimmed.split(/\s+/);
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`.toUpperCase();
};

export const validateSignupForm = ({ email, name, password }) => {
  if (!name.trim()) return "Name can't be empty.";
  if (!email.trim()) return "Pleace provide a valid email.";
  if (!password.trim()) return "Place enter valid password.";
  return null;
};

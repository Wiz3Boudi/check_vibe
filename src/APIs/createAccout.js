export const createAccount = async (value) => {
  try {
    return await fetch("http://localhost:3000/create/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...value }),
    });
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

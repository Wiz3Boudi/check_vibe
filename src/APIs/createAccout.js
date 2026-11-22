// const baseURL = import.meta.env.BASE_URL;
const baseURL = "http://localhost:3000/create-account";

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
export const fetchData = async ({ method = "GET", URL, body }) => {
  try {
    console.log(baseURL, URL, body);
    return await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

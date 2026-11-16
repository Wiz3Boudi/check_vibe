const baseURL = import.meta.env.BASE_URL;

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
export const fetchData = async ({
  method = "GET",
  URL,
  body,
  headers = {},
}) => {
  try {
    return await fetch(`${baseURL}/${URL}`, {
      method,
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

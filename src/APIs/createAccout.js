// const baseURL = import.meta.env.BASE_URL;
const baseURL = "http://localhost:3000";

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
export const API = async ({ method = "GET", URL, body, headers = {} }) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body !== undefined && method != "GET" && method != "HEAD") {
    options.body = JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch(`${baseURL}/${URL}`, options);
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new ApiError("Network error. Check your connection.", 0, null);
  }

  let data = null;
  const text = await response.text();

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {}
  }
  if (!response.ok) {
    throw new ApiError(
      data.message || "Request failed (${response.status}",
      response.status,
      data,
    );
  }
  return await data;
};

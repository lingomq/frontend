import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const isTokenExpired = () => {
  const accessToken = cookies.get("access-token");
  return accessToken === undefined;
};

export const isAuthenticated = () => {
  const accessToken = cookies.get("access-token");
  const refreshToken = cookies.get("refresh-token");

  if (accessToken === undefined && refreshToken === undefined) return false;
  return !(!validToken(refreshToken));
};

export const writeTokens = (tokens) => {
  let date = new Date(tokens.accessExpiredAt);
  let infDate = new Date(2028, 0, 1);
  cookies.set("access-token", tokens.accessToken, { path: "/", expires: date });
  cookies.set("refresh-token", tokens.refreshToken, {
    path: "/",
    expires: infDate,
  });
};

function validToken(token) {
  const decodedToken = jwtDecode(token);
  const date = new Date();
  return decodedToken.exp * 1000 >= date.getTime();
}

export function addLastHour() {
  let currentDate = new Date();
  let dateAfterHour = new Date();
  dateAfterHour.setHours(currentDate.getHours() + 1);
  cookies.set("last-hour", currentDate, { path: "/", expires: dateAfterHour });
}

export function hasLastHour() {
  const lastHour = cookies.get("last-hour");
  return lastHour === undefined;
}

export function rewriteTokens(tokens) {
  let date = new Date(tokens.accessExpiredAt);
  let infDate = new Date(2024, 0, 1);
  cookies.set("access-token", tokens.accessToken, { path: "/", expires: date });
  cookies.set("refresh-token", tokens.refreshToken, {
    path: "/",
    expires: infDate,
  });
}

export function clearAuthCookies() {
  cookies.remove("access-token");
  cookies.remove("refresh-token");
}

export function getAccessToken() {
  return cookies.get("access-token");
}

export function getRefreshToken() {
  return cookies.get("refresh-token");
}

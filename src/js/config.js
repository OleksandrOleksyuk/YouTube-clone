export const API_KEY = "AIzaSyDz0y6NqQGR3pPgw4Z_xGXhh2wxq0RzaOw";
const API_PARAMETERS = new URLSearchParams({
  key: API_KEY,
  part: ["snippet", "statistics"],
  chart: "mostPopular",
  maxResults: 12,
  regionCode: "US",
});
export const API_URL_VIDEO = `https://www.googleapis.com/youtube/v3/videos?${API_PARAMETERS}`;

export const API_URL_ICONS = `https://www.googleapis.com/youtube/v3/channels?`;

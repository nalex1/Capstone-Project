import axios from "axios";

const API_KEY = "9sGLJGJ4G8AOz6DA4kprhyHn9ev3uyyO";
const API_SECRET = "h0vwe9zfbwo1aocg";

let token = "";

async function getToken() {
  const res = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: API_KEY,
      client_secret: API_SECRET,
    })
  );
  token = res.data.access_token;
  return token;
}

export async function amadeusRequest(url, params) {
  if (!token) await getToken();

  return axios.get(`https://test.api.amadeus.com${url}`, {
    headers: { Authorization: `Bearer ${token}` },
    params,
  });
}
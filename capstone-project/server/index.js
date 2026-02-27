import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let token = "";

// Get OAuth token
async function getToken() {
  const response = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_API_KEY,
      client_secret: process.env.AMADEUS_API_SECRET,
    })
  );

  token = response.data.access_token;
  return token;
}

// Flight Search API
app.get("/api/flights", async (req, res) => {
  try {
    if (!token) await getToken();

    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: req.query,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running at http://localhost:5000");
});
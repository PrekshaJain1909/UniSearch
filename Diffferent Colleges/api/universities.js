// This is a Vercel Serverless Function
const axios = require("axios");

export default async function handler(req, res) {
  const { country } = req.query;

  if (!country) {
    return res.status(400).json({ error: "Country is required" });
  }

  try {
    const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from Hipolabs API" });
  }
}

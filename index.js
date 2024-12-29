import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;
const URL = "https://api.blockchain.com/v3/exchange/tickers";

app.use(cors());

app.get("/", async (req, res) => {
  const config = req.headers;
  try {
    const result = await axios.get(URL, config);
    res.send(JSON.stringify(result.data));
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}.`);
});

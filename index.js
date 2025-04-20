import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/gold-xauusd", async (req, res) => {
  const result = await getGoldPriceXAU();
  res.json(result);
});

const getGoldPriceXAU = async () => {
  const url = "https://th.investing.com/currencies/xau-usd";
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
  };

  try {
    const response = await fetch(url, { headers });
    const html = await response.text();
    const $ = cheerio.load(html);

    const lastPrice = $('div[data-test="instrument-price-last"]').text().trim();
    const spans = $("div.mb-3.flex.justify-between.font-bold span");
    const lowPrice = spans.eq(0).text().trim();
    const highPrice = spans.eq(1).text().trim();
    const openPrice = $('dd[data-test="open"]').text().trim();

    return {
      status: "success",
      response: {
        "gold price XAU/USD": {
          lastPrice,
          lowPrice,
          highPrice,
          openPrice,
        },
      },
    };
  } catch (err) {
    return {
      status: "failure",
      response: `Error occurred: ${err.message}`,
    };
  }
};

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

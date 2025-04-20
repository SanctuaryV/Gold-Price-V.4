# Gold Price XAU/USD Scraper

This is a simple Node.js + Express server that scrapes the gold price (XAU/USD) data from [Investing.com](https://th.investing.com/currencies/xau-usd) using Cheerio and returns it as a JSON API.

## Features

- Scrapes:
  - Last Price
  - Low Price
  - High Price
  - Open Price
- Fast and lightweight
- RESTful API endpoint

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/gold-xauusd-scraper.git
cd gold-xauusd-scraper
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

### 4. API Endpoint

```
GET /gold-xauusd
```

### Example response

```json
{
  "status": "success",
  "response": {
    "gold price XAU/USD": {
      "lastPrice": "2,370.12",
      "lowPrice": "2,365.78",
      "highPrice": "2,378.41",
      "openPrice": "2,369.00"
    }
  }
}
```

---

## Deployment (Render)

1. Push this project to a GitHub repository.
2. Go to [Render](https://render.com/), and create a new Web Service.
3. Connect your GitHub repo.
4. Set the start command to:

```bash
npm start
```

5. Make sure the environment is set to `Node` and the build command is:

```bash
npm install
```

---

## License

This project is licensed under the MIT License.

---

## Author

Made with ❤️ by SanctuaryV
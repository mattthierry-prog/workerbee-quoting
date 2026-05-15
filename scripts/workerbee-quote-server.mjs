// scripts/workerbee-quote-server.mjs
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.WORKERBEE_PORT || 18910;

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "workerbee-quote-server", host: "0.0.0.0", port });
});

app.post("/quote", async (req, res) => {
  // For now: Fake response for demo
  const { zip, delivery, items } = req.body || {};
  res.json({
    ok: true,
    zip,
    delivery,
    quotes: (items || []).map((item, k) => ({
      item,
      price: 1234 + k * 100, // dummy prices
      currency: "USD",
      note: "demo price"
    })),
    message: "This is a fake quote—replace worker logic later."
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`WorkerBee quote server listening on ${port}`);
});

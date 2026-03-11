const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const categoryRoutes = require("../routes/categoryRoutes");
const artisanRoutes = require("../routes/artisanRoutes");
const contactRoutes = require("../routes/contactRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
  })
);

app.use("/api/categories", categoryRoutes);
app.use("/api/artisans", artisanRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Trouve ton artisan" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

module.exports = app;
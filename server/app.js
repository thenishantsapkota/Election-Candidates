const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const PORT = 3000;
const HOST = "0.0.0.0";
const API_BASE_URL = process.env.API_BASE_URL;
// Creating express server
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));

app.use(
  "/api",
  createProxyMiddleware({
    target: API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

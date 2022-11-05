const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const PORT = 3000;
const HOST = "localhost";
const API_BASE_URL = process.env.API_BASE_URL;
// Creating express server
const app = express();

var allowedOrigins = ["http://localhost:3000", "http://localhost:5173", "http://192.168.1.71:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// app.use(cors);
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

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Proxy API requests
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:8080', // Replace with your API server's URL
    changeOrigin: true,
  })
);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});

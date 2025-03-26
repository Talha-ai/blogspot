// src/server.js
const app = require('./app').getApp();
const environmentConfig = require('./config/environment');

const PORT = environmentConfig.SERVER.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${environmentConfig.SERVER.ENV} mode`);
  console.log(`Listening on port ${PORT}`);
});
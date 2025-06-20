const mongooseDb = require('./dBConnectivity/db');
mongooseDb();

const app = require("./index"); // Import the Express app from app.js
const port = 3003; // Set your desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
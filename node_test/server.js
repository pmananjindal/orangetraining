//server.js
const mongoDb = require("./dbConnection/db")
mongoDb();
const app = require("./app"); // Import the Express app from app.js
const port = 3004; // Set your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);
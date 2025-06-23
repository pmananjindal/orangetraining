const app = require("./app3"); // Import the Express app from app.js
const port = 3005; // Set your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);
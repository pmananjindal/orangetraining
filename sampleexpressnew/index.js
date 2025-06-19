const express = require("express");
const app = express();
const port = 3003;

const usersRouter = require("./userRoutes");
//const paymentRouter = require("./paymentRouters");

app.use("/users", usersRouter);
//app.use("/payment", paymentRouter);

app.listen(port,() => {
console.log(`server is running on port ${port}`);
});

const express = require("express");
const app = express();
const port = 3003;

//import & connect to mongodb
const mongooseDb = require('./db');
mongooseDb();

const usersRouter = require('./userRoutes');
const paymentRouter = require('./paymentRoutes');

app.use("/users",usersRouter);
app.use("/payments",paymentRouter);

app.listen(port, ()=>{
    console.log(`Server is runnig on port ${port}`);
});

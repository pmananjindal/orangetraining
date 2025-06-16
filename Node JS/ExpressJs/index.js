const express = require("express");
const app = express();
const port = 3003;

const usersRouter = require('./userRoutes');

app.use("/users",usersRouter);

app.listen(port, ()=>{
    console.log(`Server is runnig on port ${port}`);
})
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connection");
const TaskRoute = require("./routes/TaskRoute");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/task", TaskRoute);

app.use("/", (req, res, next) => {
    res.status(404).json({
        status: false,
        message: "Not found",
    });
});

connectDB();
app.listen(3000);

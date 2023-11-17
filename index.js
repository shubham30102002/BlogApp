const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.port || 4000;

//middleware
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");

//mount
app.use("/api/v1",blogRoutes);

//db connection
const dbConnect = require("./config/database");
dbConnect();

app.listen( port, () => {
    console.log(`Success app started at ${port}`);
})

//default route
app.get("/", (req,res) => {
    res.send(`<h1>My first self created backend app</h1>`);
})
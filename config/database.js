const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.database_url, {
        useNewurlParser: true,
        useUnifiedTopology: true,
    }) 
    .then(() => console.log("DB connection successfull"))
    .catch((err) => {
        console.log("Issue in DB connection");
        console.error(err);
        process.exit(1);//force exist
    })
}

module.exports = dbConnect;
const mongoose = require("mongoose");
const { like } = require("../controller/likeBlog");


const likeSchema = mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference of post model
    },
    user:{
        type:String,
        required:true,
    },
});


module.exports = mongoose.model("Like",likeSchema);
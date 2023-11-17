const post = require("../models/postModel");

exports.createPost = async(req,res) => {
    try{
        const {title,body} = req.body;

        const post = new post({
            title,body
        });
   
        const savedPost = await post.save();

        res.status(200).json({
            post:savedPost,
        });
    }
    catch(err){
        return res.status(500).json({
            error: "error while creating post",
        });
    }
}


exports.getAllPosts = async(req,res) => {
    try{
        const posts = await post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        });
    }
    catch(err){
        return res.status(500).json({
            error: "error while fetching post",
        });
    }
}

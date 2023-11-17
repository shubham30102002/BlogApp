const like = require("../models/likeModel");
const post = require("../models/postModel");

exports.likePost = async(req,res) => {
    try{
        const {post, user} = req.body;
        const like = new like({
            post,user,
        });
        const savedLike = await like.save();

        //update the post collection bsais on this
        const updatedPost = await post.findByIdAndUpdate(post, {$push : {likes: savedLike._id}}, {new: true});

        res.json({
            post: updatedPost,
        });

    }
    catch(err){
        return res.status(500).json({
            error: "error while liking post",
        });
    }
};


exports.unlikePost = async(req, res) => {
    try{
        const {post, like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await like.findOneAndDelete({post:post, _id:like});

        //update like post collection
        const updatePost = await post.findByIdAndUpdate(post, {$pull: {likes:deletedLike._id}}, {new: true});

        res.json({
            post:updatePost,
        });
    }
    catch(err){
        return res.status(500).json({
            error: "error while unliking post",
        });
    }
}
 

const post = require("../models/postModel");
const comment = require("../models/commentModel");


exports.createComment = async(req,res) => {
    try{
        //fetch data from req body
        const {post,user,body} = req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        });
        //save the comment into dB
        const res = await comment.save();

        //find the post by id and add the new comment to its comment array
        const updatedPost = await post.findByIdAndUpdate(post, {$push : {comments: savedComment._id}}, {new: true})
                            .populate("comments")//populate the comments array with comment document
                            .exec();


        res.status(200).json({
            post:updatedPost
        });
    }
    catch(err){
        console.log(err);
        console.error(err);
        return res.status(500).json({
            error: "error while creating comment",
            
        })
    }
    
}


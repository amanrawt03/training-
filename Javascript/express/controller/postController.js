const Posts = require("../models/postModel.js");

async function getPosts(req, res, next){
  try {
    const posts = await Posts.find();
    if (!posts) return res.status(404).json({message:"No Post Found"})
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({serverError:error.message})
  }
};

async function createPost(req, res, next){
    try {
        const {title, content} = req.body
        if(!title || !content){
            return res.status(400).json({message: "All fields are required"})
        }
        const newPost = new Posts({
            title, content
        })
        await newPost.save()
        res.status(200).json({message:"Post added", post:newPost})

    } catch (error) {
        res.status(500).json({serverError:error.message})
    }
}

async function updatePost(req,res,next){
    try {
        let postId = req.params.id
        const {title, content} = req.body
        let validPost = await Posts.findById(postId)
        if(!validPost){
            return res.status(400).json({message:"post not found"})
        }
        validPost.title =title
        validPost.content = content
        await validPost.save()
        return res.status(200).json({newPost:validPost})

    } catch (error) {
        res.status(500).json({serverError:error.message})
    }
}
async function deletePost(req,res,next){
    try {
        let postId = req.params.id
        let deletePost = await Posts.findByIdAndDelete(postId)
        if(!deletePost){
            return res.status(400).json({message:"post not found"})
        }

        return res.status(200).json({message: "deleted successfully",newPost:deletePost})

    } catch (error) {
        res.status(500).json({serverError:error.message})
    }
}



module.exports= {getPosts, createPost, updatePost, deletePost}
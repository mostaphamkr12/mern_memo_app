
import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';   

export const getPosts = async (req, res) => {
 try{
        const postMessages = await  PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);

 }catch(error){
     
    res.status(404).json({message:error.message});
 }
}


export const createPost =async(req, res) => {
    try{
        const post = req.body;
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
}
catch(error){
    res.status(409).json({message:error.message});
}
}


export const updatePost = async (req, res) => {

    try{
        const {id :_id}=req.params;
        const post = req.body;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    
        const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
        res.json(updatedPost);
        
    }
    catch(error){
        res.status(404).json({message:error.message});
    }

}

export const deletePost = async (req, res) => {

    try{
        const {id}=req.params;
        console.log('ID received:', id);

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
        await PostMessage.findByIdAndDelete(id);
        res.json({message:'Post deleted successfully'});
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}   
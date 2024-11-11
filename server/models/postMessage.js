import mongoose from "mongoose";

const postScema = mongoose.Schema({

    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    creatdAt:{
        type:Date,
        default:new Date()
    }
});
const PostMessage = mongoose.model('PostMessage',postScema);
export default PostMessage;
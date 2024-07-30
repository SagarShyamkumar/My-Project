const mongoose = require ('mongoose')

const messageModel = mongoose.Schema({
    content: {
        type: String, 
        trim: true
    },
    chat: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
},
{
    Timestamps: true,
})


const Message = mongoose.model('Message', messageModel);

module.exports = Message;
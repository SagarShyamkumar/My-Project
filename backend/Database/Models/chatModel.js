const mongoose = require ('mongoose')

const chatModel = mongoose.Schema({
    chatName: { type:String,
         trim: true
        },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",

    },

},
{
    Timestamps: true,
}
);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;
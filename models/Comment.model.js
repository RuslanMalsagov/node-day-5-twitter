const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  nickname: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  // twitt: {
  //   ref: "Comment",
  //   type: mongoose.SchemaTypes.ObjectId,
  // },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
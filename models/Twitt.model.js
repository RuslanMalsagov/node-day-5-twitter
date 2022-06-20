const mongoose = require("mongoose");
const twittSchema = mongoose.Schema({
  nickname: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  comment: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const Twitt = mongoose.model("Twitt", twittSchema);

module.exports = Twitt;

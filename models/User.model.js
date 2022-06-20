
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  twits: [
    {
      ref: "Twitt",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  saves: [
    {
      ref: "Twitt",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;

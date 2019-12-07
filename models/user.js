const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, minlength: [4, "Must have a longer username"] },
  password: { type: String, required: true, minlength: [8, "Password must be at least 8 characters in length"] },
  firstName: String,
  lastName: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  currentToken: { 
    type: String,
    unique: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
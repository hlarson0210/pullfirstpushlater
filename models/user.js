const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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
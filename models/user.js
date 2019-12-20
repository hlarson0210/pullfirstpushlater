const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, minlength: [4, "Must have a longer username"] },
  password: { type: String, required: true},
  firstName: String,
  lastName: String,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  currentToken: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
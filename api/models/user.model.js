const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id : Schema.Types.ObjectId,
  username: String,
  name: String,
  lastname: String,
  password: String,
  email: String,
  photo: String,
  creationDate: {type: Date, default: Date.now },
  country: String,
  active: Boolean
});

module.exports = mongoose.model("User", userSchema);

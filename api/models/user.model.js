const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: String,
  password: String,
  email: String,
  creationDate: {type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model("User", userSchema);

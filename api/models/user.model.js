const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  _id : Schema.Types.ObjectId,
  username: String,
  name: String,
  lastname: String,
  password: String,
  email: String,
  photo: String,
  creationDate: Date, default: Date.now(),
/*   country: [{ type: Schema.Types.ObjectId, ref: "Country" }],*/  
  country: String,
  active: Boolean
});

module.exports = mongoose.model("User", userSchema);

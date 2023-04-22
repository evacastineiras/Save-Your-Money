const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spentSchema = Schema({
  _id : Schema.Types.ObjectId,
  name: String,
  price: Number,
  category: String,
  date: Date, default: Date.now(),
  owner: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Spent", spentSchema);

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true ,unique=true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("users", usersSchema);

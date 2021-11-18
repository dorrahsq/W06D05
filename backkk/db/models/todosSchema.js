const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: new Date() },
  iscomplated: { type: String, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("todos", todosSchema);

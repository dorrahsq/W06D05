const express = require("express");
const {
  createTodoFun,
  readFunc,
  deleteTodoFun,
  updateTodoFun,
  // readTFunc,
} = require("./../controllers/todos");

const todosRouter = express.Router();

todosRouter.post("/create", createTodoFun); ////
todosRouter.get("/read", readFunc);
todosRouter.delete("/delete", deleteTodoFun);
todosRouter.put("/update", updateTodoFun);
// todosRouter.get("/readT", readTFunc);

module.exports = todosRouter;

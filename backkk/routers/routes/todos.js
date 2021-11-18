const express = require("express");
const {
  createTodoFun,
  readFunc,
  deleteTodoFun,
  updateTodoFun,
} = require("./../controllers/todos");

const todosRouter = express.Router();

todosRouter.post("/create", createTodoFun); ////
todosRouter.get("/read", readFunc);
todosRouter.delete("/delete", deleteTodoFun);
todosRouter.put("/update", updateTodoFun);

module.exports = todosRouter;

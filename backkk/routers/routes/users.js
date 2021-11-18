const express = require("express");
const { createUserFun, deleteuserFun, readFunc } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/create", createUserFun) ////
usersRouter.get("/read", readFunc)
usersRouter.delete("/delete/:id", deleteuserFun)


module.exports = usersRouter;

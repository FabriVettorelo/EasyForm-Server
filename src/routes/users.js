const { Router } = require("express");
const usersRouter = Router();
const {createUser} = require ("../handlers/usersHandlers/createUser")
const {getUserById} = require ("../handlers/usersHandlers/getUserById")

usersRouter
.post("/", createUser)
.get("/:id", getUserById)

module.exports = usersRouter;
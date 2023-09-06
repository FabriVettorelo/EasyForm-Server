const { Router } = require("express");
const loginRouter = Router();
const {loginUser} = require ("../handlers/usersHandlers/loginHandler")

loginRouter
.post("/", loginUser)

module.exports = loginRouter;
const { Router } = require("express");
const formsRouter = Router();
const {createForm} = require ("../handlers/formsHandler/createForm")
const {getForms} = require ("../handlers/formsHandler/getForms")
const {getFormById} = require ("../handlers/formsHandler/getFormById")

formsRouter
.post("/", createForm)
.get("/", getForms)
.get('/:id', getFormById)

module.exports = formsRouter;
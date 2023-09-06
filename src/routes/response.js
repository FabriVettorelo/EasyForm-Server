const { Router } = require("express");
const responseRouter = Router();
const {createResponse} = require ("../handlers/responseHandler/createResponse")
const {getResponses} = require ("../handlers/responseHandler/getResponses")
const {updateResponse} = require ("../handlers/responseHandler/updateResponse")
const {getResponseById} = require ("../handlers/responseHandler/getResponseById")
const {delResponse} = require ("../handlers/responseHandler/deleteResponse")

responseRouter
.post("/", createResponse)
.get("/", getResponses)
.get("/:id", getResponseById)
.put("/:id", updateResponse)
.delete("/:id", delResponse)

module.exports = responseRouter;
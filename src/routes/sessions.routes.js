const { Router } = require("express");
const sessionRoutes = Router();
const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

sessionRoutes.post("/", sessionsController.create);

module.exports = sessionRoutes;
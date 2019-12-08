const express = require("express");
const LoginController = require("./controllers/LoginController");
const AssignController = require("./controllers/AssignController");
const TimeController = require("./controllers/TimeController");

let mockShipments = require("./mock/shipments");
let mockBikers = require("./mock/bikers");
let mockManager = require("./mock/manager");

const routes = express.Router();

routes.get("/shipments", (req, res) => res.json(mockShipments.shipments));
routes.get("/bikers", (req, res) => res.json(mockBikers.bikers));
routes.get("/manager", (req, res) => res.json(mockManager.manager));
routes.post("/login", LoginController.store);
routes.post("/assign", AssignController.store);
routes.post("/time", TimeController.store);

module.exports = routes;

const express = require("express");
const LoginController = require("./controllers/LoginController");
const AssignController = require("./controllers/AssignController");
const TimeController = require("./controllers/TimeController");
const DeliveredController = require("./controllers/DeliveredController");

let mockShipments = require("./mock/shipments");
let mockBikers = require("./mock/bikers");

const routes = express.Router();

routes.get("/shipments", (req, res) => res.json(mockShipments.shipments));
routes.get("/bikers", (req, res) => res.json(mockBikers.bikers));
routes.post("/login", LoginController.store);
routes.post("/assign", AssignController.store);
routes.post("/time", TimeController.store);
routes.post("/delivered", DeliveredController.store);

module.exports = routes;

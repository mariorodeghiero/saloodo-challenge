const express = require('express');
const LoginController = require('./controllers/LoginController');
const AssignController = require('./controllers/AssignController');
const TimeController = require('./controllers/TimeController');
const DeliveredController = require('./controllers/DeliveredController');
const mockShipments = require('./mock/shipments');
const mockBikers = require('./mock/bikers');

const routes = express.Router();

routes.post('/login', LoginController.store);
routes.post('/assign', AssignController.store);
routes.post('/time', TimeController.store);
routes.post('/delivered', DeliveredController.store);
routes.get('/shipments', (req, res) => res.json(mockShipments.shipments));
routes.get('/bikers', (req, res) => res.json(mockBikers.bikers));

module.exports = routes;

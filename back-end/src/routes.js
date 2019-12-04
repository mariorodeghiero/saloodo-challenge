const express = require("express");
const LoginController = require("./controllers/LoginController");
const AssignController = require("./controllers/AssignController");
const TimeController = require("./controllers/TimeController");

const routes = express.Router();

const manager = {
  id: 0,
  admin_id: 213,
  first_name: "Eugene",
  last_name: "Powell",
  name: "Eugene Powell",
  email: "admin@gmail",
  image: "https://randomuser.me/api/portraits/men/13.jpg",
  typeOfAccess: "manager"
};

const bikers = [
  {
    id: 0,
    biker_id: 10,
    first_name: "Arthur",
    last_name: "Stone",
    name: "Arthur Stone",
    email: "biker@gmail",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 1,
    biker_id: 11,
    first_name: "Janet",
    last_name: "Salazar",
    name: "Janet Salazar",
    email: "janetsalazar@gmail.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 2,
    biker_id: 12,
    first_name: "Danielle",
    last_name: "Wells",
    name: "Danielle Wells",
    email: "daniellewells@gmail.com",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 3,
    biker_id: 13,
    first_name: "Melissa",
    last_name: "Hill",
    name: "Melissa Hill",
    email: "melissahill@gmail.com",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    id: 4,
    biker_id: 14,
    first_name: "Terry",
    last_name: "Weber",
    name: "Terry Weber",
    email: "terryweber@gmail.com",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 5,
    biker_id: 15,
    first_name: "Larry",
    last_name: "Bell",
    name: "Larry Bell",
    email: "larrybell@gmail.com",
    image: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    id: 6,
    biker_id: 16,
    first_name: "Scott",
    last_name: "Holmes",
    name: "Scott Holmes",
    email: "scottholmes@gmail.com",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    id: 7,
    biker_id: 17,
    first_name: "Lisa",
    last_name: "Walters",
    name: "Lisa Wlaters",
    email: "lisawlaters@gmail.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 8,
    biker_id: 18,
    first_name: "Deborah",
    last_name: "Knight",
    name: "Debora Knight",
    email: "deboraknight@gmail.com",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 9,
    biker_id: 19,
    first_name: "Sharon",
    last_name: "Bailey",
    name: "Sharon Bailey",
    email: "sharonbailey@gmail.com",
    image: "https://randomuser.me/api/portraits/men/53.jpg"
  }
];

const shipments = [
  {
    id: 255858046,
    order_id: 450789469,
    origin: "space food",
    assigned: "Arthur Stone",
    destination: {
      first_name: "Christopher",
      last_name: "Gorski",
      latitude: "45.41634",
      longitude: "-75.6868",
      zip: "T0E 0M0",
      city: "Cologne",
      address: "Zugweg 29-31, 50677",
      distance_unit: "mile",
      duration_estimate: 60
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: 4
  },
  {
    id: 25546,
    order_id: 42369,
    origin: "Burger",
    assigned: null,
    destination: {
      first_name: "Bruno",
      last_name: "Matos",
      latitude: "45.41634",
      longitude: "-75.6868",
      zip: "G4G 73M2",
      city: "Cologne",
      address: "Bonner Wall 25, 50677",
      distance_unit: "mile",
      duration_estimate: 35
    },
    order_status: {
      waiting: true,
      assigned: true,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: 4
  }
];

routes.get("/shipments", (req, res) => res.json(shipments));
routes.get("/bikers", (req, res) => res.json(bikers));
routes.get("/manager", (req, res) => res.json(manager));
routes.post("/login", LoginController.store);
routes.post("/assign", AssignController.store);
routes.post("/time", TimeController.store);

module.exports = routes;

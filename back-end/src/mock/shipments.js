let shipments = [
  {
    id: 0,
    order_id: "b9abe1fc",
    origin: {
      name: "Restaurant 1",
      address: "Stieglitzweg 8",
      zip: "50829"
    },
    assigned: "Arthur Stone",
    destination: {
      first_name: "Christopher",
      last_name: "Gorski",
      zip: "50677",
      city: "Cologne",
      address: "Zugweg 29-31",
    },
    order_status: {
      waiting: true,
      assigned: true,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 1,
    order_id: "37417019",
    origin: {
      name: "Restaurant 2",
      address: "Krähenweg 41",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Bruno",
      last_name: "Matos",
      zip: "50677",
      city: "Cologne",
      address: "Bonner Wall 25",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 2,
    order_id: "867ad1b3",
    origin: {
      name: "Restaurant 3",
      address: "Krähenweg 16",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Fred",
      last_name: "Santos",
      zip: "50829",
      city: "Cologne",
      address: "Adolf-Grimme-Allee 1",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 3,
    order_id: "a6440ad8",
    origin: {
      name: "Restaurant 4",
      address: "Krähenweg 37",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Will",
      last_name: "Wills",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 19",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 4,
    order_id: "cbd95fa0",
    origin: {
      name: "Restaurant 5",
      address: "Meisenweg 13",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Nando",
      last_name: "Silva",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 19",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 5,
    order_id: "c0251576",
    origin: {
      name: "Restaurant 6",
      address: "Meisenweg 27",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jorge",
      last_name: "Soares",
      zip: "50829",
      city: "Cologne",
      address: "Goldammerweg 30",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 6,
    order_id: "d64072ef",
    origin: {
      name: "Restaurant 7",
      address: "Vogelsanger Str. 470",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Gilberto",
      last_name: "Gil",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 838",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 7,
    order_id: "e7d52d07",
    origin: {
      name: "Restaurant 8",
      address: "Vogelsanger Str. 870",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Gilberto",
      last_name: "Gil",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg  340",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 8,
    order_id: "de8dbb44",
    origin: {
      name: "Restaurant 9",
      address: "Vogelsanger Str. 452",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jackson",
      last_name: "Bill",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 30",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 9,
    order_id: "e8feb9fe",
    origin: {
      name: "Restaurant 10",
      address: "Zugweg 387",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Fred",
      last_name: "Wills",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 209",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 10,
    order_id: "497cc35e",
    origin: {
      name: "Restaurant 11",
      address: "Kurt-Weill-Weg 19",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Roger",
      last_name: "Cruz",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 23",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 11,
    order_id: "e1fbd4f9",
    origin: {
      name: "Restaurant 12",
      address: "Corintostraße 1, 51103",
      zip: "51103"
    },
    assigned: null,
    destination: {
      first_name: "Roger",
      last_name: "Cruz",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 38",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 12,
    order_id: "83f74389",
    origin: {
      name: "Restaurant 13",
      address: "Kurt-Weill-Weg 43",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Leonidas",
      last_name: "Rankin",
      zip: "51107",
      city: "Cologne",
      address: "Frankfurter Str. 702",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 13,
    order_id: "367f11e8",
    origin: {
      name: "Restaurant 14",
      address: "Corintostraße 388",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Kabir ",
      last_name: "Rankin",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg. 387",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 14,
    order_id: "eb3183bc",
    origin: {
      name: "Restaurant 15",
      address: "Bonner Wall 33",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jasmine",
      last_name: "Morris",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 73",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 15,
    order_id: "b9084a1b",
    origin: {
      name: "Restaurant 16",
      address: "Bonner Wall 33",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Kabir",
      last_name: "Acosta",
      zip: "51107",
      city: "Cologne",
      address: "Meisenweg 73",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 16,
    order_id: "e963d353",
    origin: {
      name: "Restaurant 17",
      address: "Vogelsanger 68",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Allana",
      last_name: "Dickson",
      zip: "51107",
      city: "Cologne",
      address: "Goldammerweg 99",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 17,
    order_id: "6c098633",
    origin: {
      name: "Restaurant 18",
      address: "Bonner 77",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Ayomide",
      last_name: "Walsh",
      zip: "51107",
      city: "Cologne",
      address: "Goldammerweg 99",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 18,
    order_id: "7174c622",
    origin: {
      name: "Restaurant 19",
      address: "Stieglitzweg 38",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Elisha",
      last_name: "Marshall",
      zip: "51107",
      city: "Cologne",
      address: "Zugweg 100",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 19,
    order_id: "18f4e49e",
    origin: {
      name: "Restaurant 20",
      address: "Adolf-Grimme-Allee 387",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Zaina",
      last_name: "Reyes",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 20,
    order_id: "abc9ef5c",
    origin: {
      name: "Restaurant 21",
      address: "Kurt-Weill-Weg  898",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Lilly-Mae",
      last_name: "Doherty",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 21,
    order_id: "a7ea986f",
    origin: {
      name: "Restaurant 22",
      address: "Krähenweg  352",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "Akaash",
      last_name: "Tyson",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg  3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 22,
    order_id: "9a293f6c",
    origin: {
      name: "Restaurant 23",
      address: "Zugweg  12",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Tommy",
      last_name: "Tyson",
      zip: "51107",
      city: "Cologne",
      address: "Meisenweg  90",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 23,
    order_id: "a52e2f80",
    origin: {
      name: "Restaurant 24",
      address: "Meisenweg  444",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "Kenneth",
      last_name: "Franklin",
      zip: "51107",
      city: "Cologne",
      address: "Zugweg  928",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 24,
    order_id: "df65130b",
    origin: {
      name: "Restaurant 25",
      address: "Corintostraße  32",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "Kenneth",
      last_name: "Franklin",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg  98",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 25,
    order_id: "5136ebe4",
    origin: {
      name: "Restaurant 26",
      address: "Stieglitzweg 8",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Christopher",
      last_name: "Gorski",
      zip: "50677",
      city: "Cologne",
      address: "Zugweg 29-31",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 26,
    order_id: "40a42d22",
    origin: {
      name: "Restaurant 27",
      address: "Krähenweg 41",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Bruno",
      last_name: "Matos",
      zip: "50677",
      city: "Cologne",
      address: "Bonner Wall 25",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 27,
    order_id: "e30763d2",
    origin: {
      name: "Restaurant 28",
      address: "Krähenweg 16",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Fred",
      last_name: "Santos",
      zip: "50829",
      city: "Cologne",
      address: "Adolf-Grimme-Allee 1",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 28,
    order_id: "4cc605d4",
    origin: {
      name: "Restaurant 29",
      address: "Krähenweg 37",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Will",
      last_name: "Wills",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 19",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 29,
    order_id: "975a92fb",
    origin: {
      name: "Restaurant 30",
      address: "Meisenweg 13",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Nando",
      last_name: "Silva",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 19",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 30,
    order_id: "292a115e",
    origin: {
      name: "Restaurant 31",
      address: "Meisenweg 27",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jorge",
      last_name: "Soares",
      zip: "50829",
      city: "Cologne",
      address: "Goldammerweg 30",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 31,
    order_id: "8f061954",
    origin: {
      name: "Restaurant 32",
      address: "Vogelsanger Str. 470",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Gilberto",
      last_name: "Gil",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 838",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 32,
    order_id: "6ce45b75",
    origin: {
      name: "Restaurant 33",
      address: "Vogelsanger Str. 870",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Gilberto",
      last_name: "Gil",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg  340",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 33,
    order_id: "b0299772",
    origin: {
      name: "Restaurant 34",
      address: "Vogelsanger Str. 452",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jackson",
      last_name: "Bill",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 30",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 34,
    order_id: "1dc563b8",
    origin: {
      name: "Restaurant 35",
      address: "Zugweg 387",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Fred",
      last_name: "Wills",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 209",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 35,
    order_id: "f8275e38",
    origin: {
      name: "Restaurant 36",
      address: "Kurt-Weill-Weg 19",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Roger",
      last_name: "Cruz",
      zip: "50829",
      city: "Cologne",
      address: "Meisenweg 23",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 36,
    order_id: "f17c358e",
    origin: {
      name: "Restaurant 37",
      address: "Corintostraße 1, 51103",
      zip: "51103"
    },
    assigned: null,
    destination: {
      first_name: "Roger",
      last_name: "Cruz",
      zip: "50829",
      city: "Cologne",
      address: "Kurt-Weill-Weg 38",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 37,
    order_id: "c2ce4049",
    origin: {
      name: "Restaurant 38",
      address: "Kurt-Weill-Weg 43",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Leonidas",
      last_name: "Rankin",
      zip: "51107",
      city: "Cologne",
      address: "Frankfurter Str. 702",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 38,
    order_id: "350beae4",
    origin: {
      name: "Restaurant 39",
      address: "Corintostraße 388",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Kabir ",
      last_name: "Rankin",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg. 387",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 39,
    order_id: "98e7b651",
    origin: {
      name: "Restaurant 40",
      address: "Bonner Wall 33",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Jasmine",
      last_name: "Morris",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 73",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 40,
    order_id: "7a28b107",
    origin: {
      name: "Restaurant 41",
      address: "Bonner Wall 33",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Kabir",
      last_name: "Acosta",
      zip: "51107",
      city: "Cologne",
      address: "Meisenweg 73",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 41,
    order_id: "a9717cd8",
    origin: {
      name: "Restaurant 42",
      address: "Vogelsanger 68",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Allana",
      last_name: "Dickson",
      zip: "51107",
      city: "Cologne",
      address: "Goldammerweg 99",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 42,
    order_id: "06c3133a",
    origin: {
      name: "Restaurant 43",
      address: "Bonner 77",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Ayomide",
      last_name: "Walsh",
      zip: "51107",
      city: "Cologne",
      address: "Goldammerweg 99",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 43,
    order_id: "163597db",
    origin: {
      name: "Restaurant 44",
      address: "Stieglitzweg 38",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Elisha",
      last_name: "Marshall",
      zip: "51107",
      city: "Cologne",
      address: "Zugweg 100",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 44,
    order_id: "67ec3fdb",
    origin: {
      name: "Restaurant 45",
      address: "Adolf-Grimme-Allee 387",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Zaina",
      last_name: "Reyes",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 45,
    order_id: "ec5aef5d",
    origin: {
      name: "Restaurant 46",
      address: "Kurt-Weill-Weg  898",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Ozan",
      last_name: "Doherty",
      zip: "51107",
      city: "Cologne",
      address: "Krähenweg 3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 46,
    order_id: "62d9c1b9",
    origin: {
      name: "Restaurant 47",
      address: "Krähenweg  352",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "Alena",
      last_name: "Oneal",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg  3880",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 47,
    order_id: "41ad6dba",
    origin: {
      name: "Restaurant 48",
      address: "Zugweg  12",
      zip: "50829"
    },
    assigned: null,
    destination: {
      first_name: "Hattie",
      last_name: "Mays",
      zip: "51107",
      city: "Cologne",
      address: "Meisenweg  90",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 48,
    order_id: "5c80c835",
    origin: {
      name: "Restaurant 49",
      address: "Meisenweg  444",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "King",
      last_name: "Laibah",
      zip: "51107",
      city: "Cologne",
      address: "Zugweg  928",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  },
  {
    id: 49,
    order_id: "40c6d534",
    origin: {
      name: "Restaurant 50",
      address: "Corintostraße  32",
      zip: "50726"
    },
    assigned: null,
    destination: {
      first_name: "Samina",
      last_name: "Webb",
      zip: "51107",
      city: "Cologne",
      address: "Kurt-Weill-Weg  98",
    },
    order_status: {
      waiting: true,
      assigned: false,
      picked_up: false,
      delivered: false
    },
    pickup_estimate: "Time: waiting biker"
  }
];


module.exports = {
  shipments
}

module.exports = {
  async store(req, res) {
    let shipments = [
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

    const { assigned, order_id } = req.body;

    let shipment = await shipments.find(order => order.order_id === order_id);

    if (!shipment) {
      console.log(`Order not found !!`);
      return res.status(404).send({ message: "Order not found" });
    }

    const objIndex = shipments.findIndex(obj => obj.order_id == order_id);
    shipments[objIndex].assigned = assigned;
    console.log(objIndex);
    console.log(req.body);
    console.log(shipment);

    return res.status(200).json(shipments);
  }
};

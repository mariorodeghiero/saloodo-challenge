let mockShipments = require("../mock/shipments");

module.exports = {
  async store(req, res) {

    const { order_id } = req.body;

    let shipment = await mockShipments.shipments.find(order => order.order_id === order_id);

    if (!shipment) {
      console.log(`Order not found !!`);
      return res.status(404).send({ message: "Order not found" });
    }

    const objIndex = mockShipments.shipments.findIndex(obj => obj.order_id == order_id);
    mockShipments.shipments[objIndex].order_status.delivered = true;

    console.log(req.body);
    console.log("Delivered: ", shipment);

    return res.status(200).json(mockShipments.shipments);
  }
};

import { ShimpentModel, Shipment, ShipmentByMonthStatus } from "@/types";
import { types } from "mobx-state-tree";

export const ShipmentStore = types
  .model({
    shipments: types.array(ShimpentModel),
    shipmentId: types.optional(types.string, ""),
  })
  .views((store) => ({
    get selectedShipment() {
      return store.shipments.find(
        (shipment) => shipment._id === store.shipmentId
      );
    },

    get shipmentsByMonth() {
      const months = Array.from({ length: 12 }).map(() => ({
        month: null,
        shipments: [] as Shipment[],
        status: "" as ShipmentByMonthStatus,
        price: 0,
      }));

      store.shipments.forEach((shipment) => {
        const shipmentMonth = shipment.date.getUTCMonth();
        months[shipmentMonth].month = shipmentMonth;
        months[shipmentMonth].shipments.push(shipment);
        months[shipmentMonth].price = shipment.products.reduce(
          (a, b) => parseInt(b.price) + a,
          0
        );
        //TODO: consultar la forma en la que se define el status, y definirlo
      });

      return months.filter(month=>month.month !== null)
    },
    get shipmentDetails() {
      const shipment = store.shipments.find(
        (shipment) => shipment._id === store.shipmentId
      );

      return shipment.products;
    },

    shipmentByProduct(productId: string) {
      return store.shipments.filter((shipment) =>
        shipment.products.some((product) => product._id === productId)
      );
    },
    shipmentByMember(memberId: string) {
      const shipment = store.shipments.find(
        (shipment) => shipment.memberId === memberId
      );

      return shipment.products;
    },
  }))
  .actions((store) => ({
    setShipments(shipments: Shipment[]) {
      store.shipments.replace(shipments);
    },
  }));

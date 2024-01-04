"use client"
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import EmptyShipments from "./EmptyShipments";
import DataShipments from "./DataShipments";

export default observer( function Shipments() {
  const { shipments:{shipments}}= useStore()
  return (
    <div>
      {shipments.length? <DataShipments />: <EmptyShipments />}
    </div>
  );
})

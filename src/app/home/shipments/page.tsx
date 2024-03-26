"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import EmptyShipments from "./EmptyShipments";
import DataShipments from "./DataShipments";
import { PageLayout } from "@/common";

export default observer(function Shipments() {
  const {
    shipments: { shipments },
  } = useStore();

  return (
    <PageLayout>
      {shipments.length ? <DataShipments /> : <EmptyShipments />}
    </PageLayout>
  );
});

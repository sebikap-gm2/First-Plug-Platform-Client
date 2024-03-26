"use client";
import { useState } from "react";
import { HeaderOrders, Tabs } from "@/common";
import { observer } from "mobx-react-lite";
import { EquipmentTable, LogisticsTable } from "@/components/Tables";
import { useStore } from "@/models";
export default observer(function DataOrders() {
  const {
    orders: { orders },
    shipments: { shipmentsByMonth },
  } = useStore();
  const [selectedTab, setSelectedTab] = useState<Tabs>("Equipment");

  const handleTabClick = (tabName: Tabs) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="flex flex-col gap-8">
      <HeaderOrders selectedTab={selectedTab} handleTab={handleTabClick} />
      {selectedTab === "Logistics" ? (
        <LogisticsTable shipmentsByMonth={shipmentsByMonth} />
      ) : (
        <EquipmentTable orders={orders} />
      )}
    </div>
  );
});

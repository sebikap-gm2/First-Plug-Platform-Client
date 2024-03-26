"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import React from "react";
import DataOrders from "./DataOrders";
import EmptyOrders from "./EmptyOrders";
import { PageLayout } from "@/common";

export default observer(function OrderPage() {
  const {
    orders: { orders },
  } = useStore();

  return (
    <PageLayout>{orders.length ? <DataOrders /> : <EmptyOrders />}</PageLayout>
  );
});

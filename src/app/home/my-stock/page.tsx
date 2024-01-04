"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import DataStock from "./DataStock";
import EmptyStock from "./EmptyStock";

export default observer(function MyStock() {
  const {
    products: { products },
  } = useStore();

  return (
 <div>
  {products.length ? <DataStock /> : <EmptyStock />}
 </div>
  );
});

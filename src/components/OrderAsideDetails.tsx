"use client";
import { Button } from "@/common";
import { DownloadIcon } from "@/common/Icons";
import ProductDetail from "@/common/ProductDetail";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

export const OrderAsideDetails = observer(function () {
  const {
    orders: { selectedOrder },
  } = useStore();

  return (
    <div className="h-full relative">
      <section className="flex flex-col gap-4">
        {selectedOrder.products.length
          ? selectedOrder.products.map((product) => (
              <ProductDetail key={product._id} product={product} />
            ))
          : null}
      </section>

      <div className="flex gap-4 w-full absolute bottom-0 ">
        <Button
          body="Download Invoice"
          variant={"secondary"}
          size={"big"}
          icon={<DownloadIcon />}
          className={"rounded-md w-1/2"}
        />
        <Button
          body="Download Payment Details"
          variant={"secondary"}
          size={"big"}
          icon={<DownloadIcon />}
          className={"rounded-md w-1/2 "}
        />
      </div>
    </div>
  );
});

"use client";
import { CustomLink, Button } from "@/common";
import { Fragment, useState } from "react";
import { TableDetailsShipments } from "./";
import { ArrowLeft } from "@/common/Icons";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";

interface TableDetailsShipmentsProps {
  className?: string;
}

export const TableShipments = observer(function ({
  className,
}: TableDetailsShipmentsProps) {
  const {
    orders: { orderPrice },
    shipments: { shipments },
  } = useStore();
  const [rowOpenState, setRowOpenState] = useState(
    Array(shipments.length).fill(false)
  );

  const toggleRow = (index: number) => {
    const updatedRowOpenState = [...rowOpenState];
    updatedRowOpenState[index] = !updatedRowOpenState[index];
    setRowOpenState(updatedRowOpenState);
  };

  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden border border-grey  border-1 ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-300 bg-light-grey text-black text-left">
          {/* // TODO: Review with @SEBA */}
          <th className="py-3 px-3">ID</th>
          <th className="py-3 px-3">Date</th>
          <th className="py-3 px-3">Quantity Products</th>
          <th className="py-3 px-3">Type</th>
          <th className="py-3 px-3">Track</th>
          <th className="py-3 px-3">Price</th>
          <th className="py-3 px-3"></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment, index) => (
          <Fragment key={shipment._id}>
            <tr
              key={shipment._id}
              className={`${
                rowOpenState[index] ? " bg-[#EAEDF7]" : "  bg-white"
              } text-black border-b-2 border-gray-200 text-left `}
            >
              <td className="  py-4 px-3 ">{shipment._id}</td>
              <td className="  py-4 px-3">
                <b>{shipment.date}</b>
              </td>
              <td className="  py-4 px-3">{shipment.products.length}</td>
              <td className=" py-4 px-3">{shipment.type}</td>
              <td className="py-4 px-3">
                {shipment.trackingURL ? (
                  <CustomLink
                    href={shipment.trackingURL}
                  >
                    Track {">"}
                  </CustomLink>
                ) : (
                  <span>No Track</span>
                )}
              </td>
              <td className=" py-4 px-3">$ {orderPrice(index)}</td>
              <td className="  " onClick={() => toggleRow(index)}>
                <Button className="p-2  rounded-md">
                  Details <ArrowLeft className="rotate-[-90deg]" />
                </Button>
              </td>
            </tr>

            {rowOpenState[index] && (
              <tr>
                <td colSpan={12}>
                  <TableDetailsShipments shipments={shipment.products} />
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
});

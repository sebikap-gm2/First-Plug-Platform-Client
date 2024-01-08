"use client";
import { Button, State } from "@/common";
import { TrashIcon } from "@/common/Icons";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

type TableDetailsProps = {
  className?: string;
  productId: string;
};
// TODO: Review with @SEBA
export const TableDetails = observer(function ({
  className,
  productId,
}: TableDetailsProps) {

  const {
    shipments: { shipmentByProduct },

  } = useStore();

  const SHIPMENT_ACTION = {
    "Missin Data": "Fill Data",
    Delivered: "Fill Data",
    Preparing: "Reasing",
    Avaliable: "Assing To",
    Shipped: "Track >",
  };

  return (
    <table
      className={`flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Serial</th>
          <th className="py-3 px-3 border-l border-gray-200">Currently with</th>
          <th className="py-3 px-3 border-l border-gray-200">Status</th>
          <th className="py-3 px-3 border-l border-gray-200">Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {shipmentByProduct(productId).map((shipment) => (
          <tr
            key={shipment._id}
            className="bg-white text-black border-b-2 border-gray-200 text-left"
          >
            <td className="py-4 px-3 ">
              #{shipment._id.slice(shipment._id.length - 5)}
            </td>
            <td className="py-4 px-3">
              <b>
                {shipment.name} {shipment.lastName}
              </b>
            </td>
            <td className="  py-4 px-3">
              <State message={shipment.status} className="p-1" />
            </td>
            <td className=" py-4 px-3">
              <Button>{SHIPMENT_ACTION[shipment.status]}</Button>
            </td>
            <td className=" py-4 px-3 ">
              <div className="flex gap-1">
                <Button>
                  <TrashIcon className="w-[1.5rem] h-[1.5rem]" color="red" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

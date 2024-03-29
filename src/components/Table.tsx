"use client";
import { useState, Fragment, useEffect } from "react";
import { ButtonMyStock } from "@/common";
import Image from "next/image";
import defaultPhoto from "../../public/Isotipo.png";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TableDetails } from "./";
import { Product } from "@/types";

type TableProps = {
  className?: string;
};

export const Table = observer(function ({ className }: TableProps) {
  const {
    products: { products },
    shipments: { shipments },
  } = useStore();

  const [rowOpenState, setRowOpenState] = useState({});

  useEffect(() => {
    const newState = products.reduce((acc, product) => {
      acc[product._id] = false;
      return acc;
    }, {});
    setRowOpenState(newState);
  }, [products]);

  const toggleRow = (productId: Product["_id"]) => {
    setRowOpenState((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <table
      className={`flex-col w-full rounded-2xl mb-9 border border-border ${
        className || ""
      }  `}
    >
      <thead>
        <tr className="divide-x-2 divide-gray-200 bg-light-grey text-black text-left font-semibold">
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Model</th>
          <th className="py-3 px-3 ">Quantity</th>
          <th className="py-3 px-3">Details</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((shipment) => (
          <Fragment key={shipment._id}>
            {shipment.products.map((product) => (
              <Fragment key={product._id}>
                <tr
                  key={product._id}
                  className="bg-white text-black border-gray-200 text-left h-[6rem] border-y-2 "
                >
                  <td className="py-4 px-3 flex gap-9 items-center">
                    <Image
                      src={product.imgUrl ? product.imgUrl : defaultPhoto}
                      alt={product.category}
                      width={48}
                      height={48}
                    />
                    <span>{product.category}</span>
                  </td>
                  <td className="py-4 px-3 items-center">
                    {product.model}
                    <br />
                    {product.description}{" "}
                  </td>
                  <td className="py-4 px-3 items-center ">{product.stock}</td>
                  <td className="flex-col items-center">
                    <div>
                      <ButtonMyStock
                        body="Detail"
                        onClick={() => toggleRow(product._id)}
                      />
                    </div>
                  </td>
                </tr>
                {rowOpenState[product._id] && (
                  <tr>
                    <td colSpan={4}>
                      <TableDetails productId={product._id} />
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
});

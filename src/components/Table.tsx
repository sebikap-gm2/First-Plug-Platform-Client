"use client";
import { useState, Fragment } from "react";
import { ButtonMyStock } from "@/common";
import Image from "next/image";
import defaultPhoto from "../../public/Isotipo.png";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TableDetails } from "./";

type TableProps = {
  className?: string;
};

export const Table = observer(function ({ className }: TableProps) {
  const {
    products: { products },
  } = useStore();

  const [rowOpenState, setRowOpenState] = useState(
    Array(products.length).fill(false)
  );

  //TODO:  to toggle by rowId instead of index
  const toggleRow = (index: number) => {
    const updatedRowOpenState = [...rowOpenState];
    updatedRowOpenState[index] = !updatedRowOpenState[index];
    setRowOpenState(updatedRowOpenState);
  };

  return (
    <table className={`flex-col w-full  ${className || ""}  `}>
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Model</th>
          <th className="py-3 px-3">Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <Fragment key={product._id}>
            <tr className="bg-white text-black border-b-2 border-gray-200 text-left h-[6rem] ">
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
              <td className="py-4 px-3 items-center">{product.stock}</td>
              <td className="flex-col items-center">
                <div>
                  <ButtonMyStock
                    body="Detail"
                    onClick={() => toggleRow(index)}
                  />
                </div>
              </td>
            </tr>
            {rowOpenState[index] && (
              <tr>
                <td colSpan={4}>
                  <TableDetails productId={product._id} />
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
});

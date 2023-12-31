import React from "react";
import Image from "next/image";
import { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
  className?: string;
  isChecked?: boolean;
}

export default function ProductDetail({
  product,
  className = "",
  isChecked = false,
}: ProductDetailProps) {
  return (
    <div
      className={`flex gap-2 border rounded-md p-2  text-black ${className}`}
    >
      {isChecked ? <input type="checkbox" className="w-5 h-5" /> : null}

      <Image
        src={product.imgUrl}
        className="h-[5rem] w-auto "
        width={40}
        height={40}
        alt={"imagen-producto"}
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Category:</h1>
          <span className="font-light">{product.category}</span>
        </div>

        <hr />

        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Model:</h1>
          <span className="font-light">{product.model}</span>
        </div>
        <p className="text-dark-grey text-md">{product.screen}</p>

        {product.stock ? (
          <>
            <hr />

            <div className="flex gap-2 items-center">
              <h1 className="font-normal text-lg">Quantity:</h1>
              <span className="font-normal text-lg">{product.stock}</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

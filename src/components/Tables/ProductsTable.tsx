import { Product, ShipmentStatus } from "@/types";
import React from "react";
import { Table } from "../Table";
import { ArrowRight, Button, ShipmentStatusCard, TrashIcon } from "@/common";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
//TODO: review this.
function setAction(status: string) {
  switch (status) {
    case "Available":
      return "Assign To";
    case "Delivered":
      return "Return";
    case "Missing Data":
      return "Fill Data";
    case "Preparing":
      return "Reasign";
    case "Shipped":
      return "Track >";
  }
}

// TODO :  Agregar lógica que defina que columnas se muestran y cuales no. Por ejmeplo en la tabla que se despliega desde TableShipments,
// las columnas que deberian verse son Category, Model y Serial.

export const prodcutColumns: ColumnDef<Product>[] = [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 200,
    cell: ({ row, getValue }) => (
      <div className="flex gap-2 items-center">
        <div className="relative w-[25%]   aspect-square   ">
          <Image
            src={row.original.imgUrl}
            alt={getValue<string>()}
            fill
            className=" aspect-video rounded-md shadow-md "
          />
        </div>
        <span>{getValue<string>()}</span>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.name,
    header: "Model",
    size: 400,
    cell: ({ row, getValue }) => (
      <div className="flex flex-col ">
        <section className="text-lg "> {getValue<string>()}</section>
        <section className=" flex gap-2 text-dark-grey text-xs ">
          <div className="flex  items-center">
            <span>Proccesor </span>
            <p className="font-normal"> {row.original.processor}</p>
          </div>
          <div className="flex  items-center">
            <span>RAM </span>
            <p className="font-normal"> {row.original.ram}</p>
          </div>
          <div className="flex  items-center">
            <span>SDD </span>
            <p className="font-normal">
              <p className="font-normal"> {row.original.storage}</p>
            </p>
          </div>
        </section>
      </div>
    ),
  },
  {
    accessorFn: (row) => row.stock,
    header: "Quantity",
    size: 200,
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
  {
    accessorFn: (row) => row.serialNumber,
    header: "Serial",
    size: 200,
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    id: "expander",
    header: () => null,
    size: 10,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div className=" flex justify-end">
            <Button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
              variant="text"
              className="p-2 rounded-lg cursor-pointer "
            >
              <span>Details</span>
              <ArrowRight
                className={`transition-all duration-200 ${
                  row.getIsExpanded() ? "rotate-[90deg]" : "rotate-[0]"
                }`}
              />
            </Button>
          </div>
        )
      );
    },
  },
];

/* TODO:  esta tabla deberia ser una lista de Shipments en base al prodcuto que se hace click?.
 Es decir si un producto tiene en quantity 5. Deberian figurar 5 shipments con sus correspondientes status e informacion? */

const InternalProductsColumns: ColumnDef<Product>[] = [
  {
    accessorFn: (row) => row.serialNumber,
    header: "Serial",
    cell: ({ getValue }) => (
      <span className="text-sm">{getValue<string>()}</span>
    ),
  },
  {
    accessorFn: (row) => row.name,
    header: "Currently with",
    cell: ({ row }) => (
      <span className="text-md">
        {/* // TODO: nombre de la persona a la que se dirige el producto */}
        Name & LastName
      </span>
    ),
  },
  {
    accessorFn: (row) => row.status,
    header: "Status",
    cell: ({ getValue }) => (
      <ShipmentStatusCard status={getValue<ShipmentStatus>()} />
    ),
  },
  {
    accessorFn: (row) => row.status,
    header: "Actions",
    cell: ({ row, getValue }) => (
      <Button variant="text">{setAction(row.original.status)}</Button>
    ),
  },
  {
    id: "actiondelete",
    header: "",
    cell: () => (
      <div className="flex justify-end">
        <Button variant="text">
          <TrashIcon color="red" strokeWidth={2} />
        </Button>
      </div>
    ),
  },
];

interface ProductTableProps {
  products: Product[];
  internalProducts?: Product[];
}
export function ProductsTable({
  internalProducts,
  products,
}: ProductTableProps) {
  return (
    <Table<Product>
      data={products}
      columns={prodcutColumns}
      getRowCanExpand={() => true}
      subComponent={
        internalProducts ? (
          <Table<Product>
            data={internalProducts}
            columns={InternalProductsColumns}
          />
        ) : null
      }
    />
  );
}

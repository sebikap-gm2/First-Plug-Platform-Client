"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";

export const ComputerForm = function () {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [processor, setProcessor] = React.useState("");
  const [ram, setRam] = React.useState("");
  const [storage, setStorage] = React.useState("");

  const brandOptions = [
    "Apple",
    "Samsung",
    "Dell",
    "HP",
    "Lenovo",
    "Logitech",
    "Ledger",
    "Other",
  ];
  return (
    <>
      <div w-full>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={brandOptions}
            placeholder="Brand"
            title="Brand"
            selectedOption={brand}
            onChange={(option) => {
              setBrand(option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            placeholder="Model"
            title="Model"
            selectedOption={model}
            onChange={(option) => setModel(option)}
            required="required"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            placeholder="Processor"
            title="Processor"
            selectedOption={processor}
            onChange={(option) => setProcessor(option)}
            required="required"
          />
          <DropdownInputProductForm
            placeholder="RAM"
            title="RAM"
            selectedOption={ram}
            onChange={(option) => setRam(option)}
            required="required"
          />
          <DropdownInputProductForm
            placeholder="Storage"
            title="Storage"
            selectedOption={storage}
            onChange={(option) => setStorage(option)}
            required="required"
          />
        </div>
      </div>
    </>
  );
};

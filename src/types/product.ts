import { types, Instance } from "mobx-state-tree";

export const PRODUCT_STATUSES = ["Available", "Delivered"] as const;

export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

const ProductSummaryModel = types.model({
  _id: types.string,
  name: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  category: types.optional(types.string, ""),
});
export type ProductSummary = Instance<typeof ProductSummaryModel>;

export const ProductModel = types.compose(
  ProductSummaryModel,
  types.model({
    model: types.optional(types.string, ""),
    color: types.optional(types.string, ""),
    screen: types.optional(types.string, ""),
    keyboard: types.optional(types.string, ""),
    processor: types.optional(types.string, ""),
    ram: types.optional(types.string, ""),
    storage: types.optional(types.string, ""),
    gpu: types.optional(types.string, ""),
    serialNumber: types.optional(types.string, ""),
    price: types.optional(types.string, ""),
    status: types.optional(types.string, ""),
    imgUrl: types.optional(types.string, ""),
    stock: types.number,
  })
);

export type Product = Instance<typeof ProductModel>;

export type ProductTable = {
  category: {
    category: string;
    img: string;
  };
  model: {
    model: string;
    processor?: string;
    ram?: string;
    storage?: string;
  };
  quantity: number;
  serialNumber: string;
};

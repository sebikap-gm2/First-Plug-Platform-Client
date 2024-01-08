import { types } from "mobx-state-tree";
import { Product, ProductModel } from "@/types";

export const ProductsStore = types
  .model({
    selectedProductId: types.maybe(types.string),
    products: types.array(ProductModel),
  })
  .views((store) => ({
    get uniqueProducts() {
      const groupedProducts = store.products.reduce((result, product) => {
        if (!result[product.category]) {
          result[product.category] = product;
        }
        return result;
      }, {});

      return Object.values(groupedProducts) as Product[];
    },

    productById(productId: string) {
      return store.products.find(product => product._id === productId);
    }
    
  }))
  .actions((store) => ({
    setProducts(products: Product[]) {
      store.products.replace(products);
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
  }));

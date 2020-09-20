import Product from "./Product";

import { Specification } from "./@types";

export default class GoodFilter {
  filter(products: Product[], spec: Specification): Product[] {
    return products.filter((product) => spec.isSatisfied(product));
  }
}

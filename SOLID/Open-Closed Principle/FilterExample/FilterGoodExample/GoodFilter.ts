import Product from "./Product";

import { Specification } from "./@types";

export default class GoodFilter {
  filter(products: Product[], specification: Specification): Product[] {
    return products.filter((product) => specification.isSatisfied(product));
  }
}

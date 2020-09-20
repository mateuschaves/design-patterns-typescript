import Product from "../Product";

export default class SizeSpecification {
  size: string;

  constructor(size: string) {
    this.size = size;
  }

  isSatisfied(item: Product) {
    return this.size === item.size;
  }
}

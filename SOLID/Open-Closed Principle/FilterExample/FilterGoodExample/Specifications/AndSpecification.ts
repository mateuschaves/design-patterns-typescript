import Product from "../Product";

export default class AndSpecification {
  specifications: any;

  constructor(...specs: any) {
    this.specifications = specs;
  }

  isSatisfied(item: Product): boolean {
    return this.specifications?.every((x: any) => x.isSatisfied(item));
  }
}

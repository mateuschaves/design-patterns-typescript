import Product from "../Product";

export default class ColorSpecification {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  isSatisfied(item: Product) {
    return this.color === item.color;
  }
}

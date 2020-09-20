import Product from "./Product";

export default class BadFilter {
  /**
   *  This example break the Open Closed Pinciple
   *  because it needed change the class to add more
   *  filter options.
   */

  filterByColor(products: Product[], color: string): Product[] {
    return products.filter((product) => product.color === color);
  }

  filterBySize(products: Product[], size: string): Product[] {
    return products.filter((product) => product.size === size);
  }

  filterByName(products: Product[], name: string): Product[] {
    return products.filter((product) => product.name === name);
  }

  filterByColorAndSize(
    products: Product[],
    color: string,
    size: string
  ): Product[] {
    return products.filter(
      (product) => product.color === color && product.size === size
    );
  }
}

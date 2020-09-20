import Product from "./Product";
import BadFilter from "./BadFilter";

const Color = Object.freeze({
  red: "red",
  green: "green",
  blue: "blue",
});

const Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
  yuge: "yuge",
});

const shirt = new Product("Shirt", Size.medium, Color.green);
const pant = new Product("Pant", Size.small, Color.blue);
const shoes = new Product("Shoes", Size.medium, Color.blue);

const products = [shirt, pant, shoes];

const filter = new BadFilter();

for (const product of filter.filterByColorAndSize(
  products,
  Color.green,
  Size.medium
))
  console.log(` * ${product.name} is ${Color.green} and ${Size.medium}`);

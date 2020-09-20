import Product from "./Product";
import GoodFilter from "./GoodFilter";
import {
  AndSpecification,
  SizeSpecification,
  ColorSpecification,
} from "./Specifications";

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

const filter = new GoodFilter();

const specifications = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.medium)
);

for (const product of filter.filter(products, specifications))
  console.log(` * ${product.name} is ${Color.green} and ${Size.medium}`);

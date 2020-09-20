export default class Product {
  name: string;
  color: string;
  size: string;

  constructor(name: string, size: string, color: string) {
    this.name = name;
    this.size = size;
    this.color = color;
  }
}

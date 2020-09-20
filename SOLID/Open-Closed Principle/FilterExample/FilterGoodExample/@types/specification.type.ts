import {
  AndSpecification,
  ColorSpecification,
  SizeSpecification,
} from "../Specifications";

type Specification = AndSpecification | ColorSpecification | SizeSpecification;

export default Specification;

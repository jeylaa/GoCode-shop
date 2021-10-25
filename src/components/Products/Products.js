import Product from "../Product/Product";
import "./Products.css";
import { items } from "../../App";
function Products() {
  return (
    <section className="products">
      {items.map(({ id, title, price, image }) => (
        <Product id={id} title={title} price={price} image={image} />
      ))}
    </section>
  );
}
export default Products;

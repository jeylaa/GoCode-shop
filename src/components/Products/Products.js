import Product from "../Product/Product";
import "./Products.css";
function Products({ products }) {
  return (
    <section className="products">
      {products.map(
        ({ id, title, price, image, description, category, rating }) => (
          <Product
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
            rating={rating}
          />
        )
      )}
    </section>
  );
}
export default Products;

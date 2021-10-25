import "./Product.css";

function Product({ image, title, price }) {
  return (
    <div class="product-card">
      <div class="product-image">
        <img src={image} alt="Img" />
      </div>
      <div class="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
    </div>
  );
}

export default Product;

import "./Product.css";

function Product({ image, title, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="Img" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>₪{price}</h6>
      </div>
    </div>
  );
}

export default Product;

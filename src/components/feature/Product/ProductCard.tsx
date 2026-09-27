import type { IProductType } from "../../../types/productType";

interface ProductCardProps {
  product: IProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.name}</span>
        <div className="product-emoji" aria-hidden="true">
          <img src={product.id} alt="Product" />
        </div>
      </div>

      <div className="product-content">
        <div>
          <p className="category">{product.name}</p>
          <h3>{product.name}</h3>
        </div>
        <p className="price">${product.price.toLocaleString()}</p>
      </div>
      <button className="add-button" type="button">
        <span aria-hidden="true">+</span> Add to cart
      </button>
      {/* {cartProduct ? (
        <div className="quantity-control">
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "REMOVE_CART", payload: product.id })
            }
          >
            −
          </button>
          <span>{cartProduct.quantity}</span>
          <button type="button">+</button>
        </div>
      ) : (
        <button className="add-button" type="button">
          <span aria-hidden="true">+</span> Add to cart
        </button>
      )} */}
    </article>
  );
};

export default ProductCard;

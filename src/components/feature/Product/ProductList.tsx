import { products } from "../../../utils/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="products-section" aria-labelledby="products-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CATALOG</p>
          <h2 id="products-title">Popular products</h2>
        </div>
        <span className="product-count">{products.length} products</span>
      </div>

      <div className="product-grid">
        {/* {loading && "Loading"}
        {error && "Error"} */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

import { useProduct } from "../../../context/product/productContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { state } = useProduct();
  return (
    <section className="products-section" aria-labelledby="products-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CATALOG</p>
          <h2 id="products-title">Popular products</h2>
        </div>
        <span className="product-count">{state.products.length} products</span>
      </div>

      <div className="product-grid">
        {state.loading
          ? "Loading..."
          : state.error
            ? state.error.message
            : state.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </section>
  );
};

export default ProductList;

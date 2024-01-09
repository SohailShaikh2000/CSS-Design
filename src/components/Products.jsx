import PC from "../assets/images/image-retro-pcs.jpg";
import Laptop from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
import "../styles/Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <div className="pc-products">
        <div className="products">
          <div className="product-img">
            <img src={PC} alt="pc" />
          </div>
          <div className="product-info">
            <h2>01</h2>
            <h3>reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </div>
      <div className="laptop-products">
        <div className="products">
          <div className="product-img">
            <img src={Laptop} alt="Laptop" />
          </div>
          <div className="product-info">
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budget.</p>
          </div>
        </div>
      </div>
      <div className="gaming-products">
        <div className="products">
          <div className="product-img">
            <img src={Gaming} alt="Gaming Console" />
          </div>
          <div className="product-info">
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

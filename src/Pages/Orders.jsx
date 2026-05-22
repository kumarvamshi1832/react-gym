import { useNavigate } from "react-router-dom";
import "../styles/order.css";

function Orders() {
  const navigate = useNavigate();

  return (
    <div className="orders-container">

      <div className="order-card">

        <img
          src="/images/gym/weight-loss women.png"
          alt="Weight Loss"
          className="order-img"
        />

        <div className="order-content">

          <h3>Weight Loss Products</h3>

          <h2>Men & Women</h2>

          <p>
            Burn fat, build lean muscle and achieve a healthy toned body with
            our premium fitness products and diet plans.
          </p>

          <button
            className="order-btn"
            onClick={() => navigate("/wlcart")}
          >
            Explore Products
          </button>

        </div>

      </div>

    </div>
  );
}

export default Orders;
import { useEffect, useState } from "react";
import "../styles/Mypurchase.css";

function Mypurchase() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="purchase-container">

      <h1 className="title">Your Order History</h1>

      {orders.length === 0 ? (
        <div className="empty">
          <h3>No purchases yet</h3>
          <p>Start shopping and your orders will appear here</p>
        </div>
      ) : (
        <div className="orders-list">

          {orders.map((order) => (
            <div className="order-box" key={order.orderId}>

              <div className="order-header">
                <h2>Order #{order.orderId}</h2>
                <span>{order.date}</span>
              </div>

              <div className="items">
                {order.items.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.image} alt={item.name} />

                    <div className="info">
                      <h3>{item.name}</h3>
                      <p>₹{item.price} × {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="total">
                Total Amount: ₹{order.totalPrice.toFixed(2)}
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Mypurchase;
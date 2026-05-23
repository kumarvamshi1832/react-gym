import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {QRCode} from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import {
  clearCart,
  decreaseQty,
  increaseQty,
  removeCart,
} from "./CartSlice";

import { applyCupon } from "./CouponSlice";
import { addOrder } from "./OrderSlice";

import "../styles/cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [paymentmethod, setpaymentmethod] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [offerDiscount, setOfferDiscount] = useState(0);
  const [cupon, setCupon] = useState("");

  const { discount = 0 } = useSelector(
    (state) => state.cuponDetails || {}
  );

  // TOTALS
  const totalQty = cartItems.reduce((s, i) => s + i.quantity, 0);

  const totalBill = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountAmount = (totalBill * offerDiscount) / 100;
  const amountAfterDiscount = totalBill - discountAmount;

  const couponDiscountAmount =
    (amountAfterDiscount * discount) / 100;

  const finalAmount =
    amountAfterDiscount - couponDiscountAmount;

  const taxAmount = (finalAmount * 18) / 100;

  const netAmount = finalAmount + taxAmount;

  // ORDER DETAILS
  const purchaseDetails = {
    
    orderId: "ORD-" + Math.floor(Math.random() * 1000000000),
    date: new Date().toLocaleString(),
    items: cartItems,
    totalPrice: netAmount,
  };

  // PLACE ORDER + EMAIL
  const handlePlaceOrder = () => {
    const templateParams = {
      order_id: purchaseDetails.orderId,
      email: CustomerEmail,

      orders: cartItems.map((item) => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity,
      })),

      cost: {
        tax: taxAmount.toFixed(2),
        total: netAmount.toFixed(2),
      },
    };

    emailjs
      .send(
        "service_68m3q08",
        "template_e3qnr9e",
        templateParams,
        "m7-BZFjN0Nte5TIt7"
      )
      .then(() => {
        toast.success("Order placed & email sent");

        dispatch(addOrder(purchaseDetails));
        setTimeout(() => {
    dispatch(clearCart());
  }, 1500);
      })
       .catch((error) => { alert("❌ Email sending failed:", error); });
  };

  return (
    <>
      <div className="cart-container">

        <button
          className="clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your Cart Is Empty</h3>
            <h2>Add some items to get started</h2>
          </div>
        ) : (
          <>
            {/* PRODUCTS */}
            <ul className="cart-products">
              {cartItems.map((item) => (
                <li className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h1>{item.name}</h1>
                  <h2>{item.description}</h2>
                  <h3>₹{item.price}</h3>

                  <div className="qty-container">
                    <button onClick={() => dispatch(decreaseQty(item.name))}>
                      -
                    </button>
                    <h4>{item.quantity}</h4>
                    <button onClick={() => dispatch(increaseQty(item.name))}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeCart(item.name))}
                  >
                    Remove Item
                  </button>
                </li>
              ))}
            </ul>

            {/* BILL */}
            <div className="billbox">
              <h3>Total Bill</h3>

              <div className="discountBtns">
                <button onClick={() => setOfferDiscount(10)}>10% OFF</button>
                <button onClick={() => setOfferDiscount(20)}>20% OFF</button>
                <button onClick={() => setOfferDiscount(30)}>30% OFF</button>
              </div>

              <div className="couponBox">
                <input
                  value={cupon}
                  onChange={(e) => setCupon(e.target.value)}
                  placeholder="Enter Coupon"
                />
                <button onClick={() => dispatch(applyCupon(cupon))}>
                  Apply Coupon
                </button>
              </div>

              <h2>Total Items: {totalQty}</h2>
              <h2>Original Bill: ₹{totalBill.toFixed(2)}</h2>
              <h2>Offer Discount: {offerDiscount}%</h2>
              <h2>GST (18%): ₹{taxAmount.toFixed(2)}</h2>
              <h1>Net Amount: ₹{netAmount.toFixed(2)}</h1>

              {/* EMAIL INPUT */}
              <input
                type="email"
                placeholder="Enter email"
                value={CustomerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />

              <button onClick={handlePlaceOrder}>
                Place Order
              </button>

              {/* PAYMENT OPTIONS */}
              <div>
                <button onClick={() => setpaymentmethod("qr")}>
                  QR Code
                </button>
                <button onClick={() => setpaymentmethod("card")}>
                  Card
                </button>
              </div>

              {/* QR CODE (UNCHANGED) */}
              {paymentmethod === "qr" && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <h3>Scan QR to Pay ₹{netAmount.toFixed(2)}</h3>

                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "15px",
                      width: "fit-content",
                      margin: "auto",
                    }}
                  >
                    <QRCode
                      value={`upi://pay?pa=8688811272@ybl&pn=Vemmu&am=${netAmount.toFixed(
                        2
                      )}&cu=INR`}
                      size={180}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default Cart;
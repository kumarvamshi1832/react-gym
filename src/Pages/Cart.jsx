import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  clearCart,
  decreaseQty,
  increaseQty,
  removeCart,
} from "./CartSlice";

import { applyCupon } from "./CouponSlice";

import "../styles/Cart.css";

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart
  );

  const {
    code,
    discount,
    applied,
    message,
  } = useSelector(
    (globalState) =>
      globalState.cuponDetails || {}
  );

  const dispatch = useDispatch();

  // TOTAL ITEMS

  const totalQty = cartItems.reduce(
    (s, i) => s + i.quantity,
    0
  );

  // ORIGINAL BILL

  const totalBill = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // OFFER DISCOUNT

  const [offerDiscount, setOfferDiscount] =
    useState(0);

  // COUPON INPUT

  const [cupon, setCupon] = useState("");

  // OFFER DISCOUNT AMOUNT

  const discountAmount =
    (totalBill * offerDiscount) / 100;

  // AFTER OFFER DISCOUNT

  const amountAfterDiscount =
    totalBill - discountAmount;

  // COUPON DISCOUNT AMOUNT

  const couponDiscountAmount =
    (amountAfterDiscount *
      (discount || 0)) /
    100;

  // AFTER COUPON

  const finalAmountAfterCoupon =
    amountAfterDiscount -
    couponDiscountAmount;

  // GST 18%

  const taxAmount =
    (finalAmountAfterCoupon * 18) / 100;

  // FINAL BILL

  const netAmount =
    finalAmountAfterCoupon + taxAmount;

  return (
    <>
      <div className="cart-container">

        {/* CLEAR CART BUTTON */}

        <button
          className="clear-btn"
          onClick={() =>
            dispatch(clearCart())
          }
        >
          Clear Cart
        </button>

        {/* EMPTY CART */}

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <h3>Your Cart Is Empty</h3>

            <h2>
              Add some items to get started
            </h2>

          </div>

        ) : (

          <ul className="cart-products">

            {cartItems.map((item) => (

              <li
                className="cart-card"
                key={item.id}
              >

                {/* PRODUCT IMAGE */}

                <img
                  src={item.image}
                  alt={item.name}
                />

                {/* PRODUCT DETAILS */}

                <h1>{item.name}</h1>

                <h2>{item.description}</h2>

                <h3>₹{item.price}</h3>

                {/* QUANTITY */}

                <div className="qty-container">

                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQty(item.name)
                      )
                    }
                  >
                    -
                  </button>

                  <h4>{item.quantity}</h4>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQty(item.name)
                      )
                    }
                  >
                    +
                  </button>

                </div>

                {/* REMOVE BUTTON */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeCart(item.name)
                    )
                  }
                >
                  Remove Item
                </button>

              </li>

            ))}

          </ul>

        )}

        {/* BILL SECTION */}

        {cartItems.length > 0 && (

          <div className="billbox">

            <h3>Total Bill</h3>

            {/* OFFER BUTTONS */}

            <div className="discountBtns">

              <button
                onClick={() =>
                  setOfferDiscount(10)
                }
              >
                10% OFF
              </button>

              <button
                onClick={() =>
                  setOfferDiscount(20)
                }
              >
                20% OFF
              </button>

              <button
                onClick={() =>
                  setOfferDiscount(30)
                }
              >
                30% OFF
              </button>

            </div>

            {/* COUPON BOX */}

            <div className="couponBox">

              <input
                type="text"
                placeholder="Enter Coupon"
                value={cupon}
                onChange={(e) =>
                  setCupon(e.target.value)
                }
              />

              <button
                onClick={() =>
                  dispatch(
                    applyCupon(cupon)
                  )
                }
              >
                Apply Coupon
              </button>

            </div>

            {/* MESSAGE */}

            {message && (

              <div>

                <h3
                  style={{
                    color: applied
                      ? "lightgreen"
                      : "red",
                  }}
                >
                  {message}
                </h3>

                {applied && (
                  <>

                    <h2>
                      Coupon Code: {code}
                    </h2>

                    <h2>
                      Coupon Discount:
                      {discount}%
                    </h2>

                    <h2>
                      Coupon Discount Amount:
                      ₹
                      {couponDiscountAmount.toFixed(
                        2
                      )}
                    </h2>

                  </>
                )}

              </div>

            )}

            {/* BILL DETAILS */}

            <h2>
              Total Items: {totalQty}
            </h2>

            <h2>
              Original Bill: ₹
              {totalBill.toFixed(2)}
            </h2>

            <h2>
              Offer Discount:
              {offerDiscount}%
            </h2>

            <h2>
              Offer Discount Amount: ₹
              {discountAmount.toFixed(2)}
            </h2>

            <h2>
              GST (18%): ₹
              {taxAmount.toFixed(2)}
            </h2>

            <h1>
              Net Amount: ₹
              {netAmount.toFixed(2)}
            </h1>

          </div>

        )}

      </div>
    </>
  );
}

export default Cart;
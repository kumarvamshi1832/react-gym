import { useDispatch, useSelector } from "react-redux";

import {
  clearcart,
  decreaseQty,
  increaseQty,
  removeCart,
} from "./CartSlice";

import "../styles/Cart.css";

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (

    <div className="cart-container">

      {/* CLEAR CART BUTTON */}

      <button
        className="clear-btn"
        onClick={() => dispatch(clearcart())}
      >
        Clear Cart
      </button>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <h3>Your Cart Is Empty</h3>
          <h2>Add some items to get started</h2>
        </div>

      ) : (

        /* PRODUCTS */

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
                    dispatch(decreaseQty(item.name))
                  }
                >
                  -
                </button>

                <h4>{item.quantity}</h4>

                <button
                  onClick={() =>
                    dispatch(increaseQty(item.name))
                  }
                >
                  +
                </button>

              </div>

              {/* REMOVE BUTTON */}

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(removeCart(item.name))
                }
              >
                Remove Item
              </button>

            </li>

          ))}

        </ul>

      )}

    </div>
  );
}

export default Cart;
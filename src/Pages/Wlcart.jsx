import { useState } from "react";
import { useDispatch } from "react-redux";

import weightlossproducts from "./wldetails";
import { addtocart } from "./CartSlice";

import "../styles/Wlcart.css";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Wlcart() {

  const dispatch = useDispatch();

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = Math.ceil(
    weightlossproducts.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  const currentProducts =
    weightlossproducts.slice(
      startIndex,
      endIndex
    );

  const handlePrev = () => {

    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (

    <div className="wlcart-container">

      {/* PRODUCTS GRID */}

      <ul className="products-grid">

        {currentProducts.map((item) => (

          <li
            className="product-card"
            key={item.id}
          >

            {/* PRODUCT IMAGE */}

            <img
              src={item.image}
              alt={item.name}
            />

            {/* PRODUCT NAME */}

            <h2>{item.name}</h2>

            {/* PRICE */}

            <span>
              ₹{item.price}
            </span>

            {/* DESCRIPTION */}

            <p>
              {item.description}
            </p>

            {/* BUTTON */}

            <button
              onClick={() =>
                {dispatch(addtocart(item));
                  toast.success(`product ${item.name} added to cart sucessfully!`);
                }
                
              }
            >
              Add to Cart 🛒
            </button>

          </li>

        ))}

      </ul>

      {/* PAGINATION */}

      <div className="pagination">

        {/* PREV BUTTON */}

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          ⏮
        </button>

        {/* PAGE NUMBERS */}

        {Array.from(
          { length: totalPages },
          (_, index) => (

            <button
              key={index}

              onClick={() =>
                setCurrentPage(index + 1)
              }

              className={
                currentPage === index + 1
                  ? "active"
                  : ""
              }
            >
              {index + 1}
            </button>

          )
        )}

        {/* NEXT BUTTON */}

        <button
          onClick={handleNext}
          disabled={
            currentPage === totalPages
          }
        >
          ⏭
        </button>

      </div>

    </div>
  );
}

export default Wlcart;
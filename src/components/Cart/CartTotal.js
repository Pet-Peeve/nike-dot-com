import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotal({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 ml-5 ml-md-auto ml lg-auto text-capitalize text-right mt-2">
            <Link to="/">
              <button
                onClick={() => clearCart()}
                className="btn btn-outline-danger text-uppercase mb-1"
              >
                clear
              </button>
            </Link>
            <h5>
              <span className="product">sub total : </span>
              <strong className="text-green">R : {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="product">tax : </span>
              <strong className="text-green">R : {cartTax}</strong>
            </h5>
            <h5>
              <span className="product">total : </span>
              <strong className="text-green">R : {cartTotal}</strong>
            </h5>
            <PayPalButton
              cartTotal={cartTotal}
              history={history}
              clearCart={clearCart}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

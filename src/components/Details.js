import React, { Component } from "react";
import { ProductConsumer } from "../contextAPI";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            img,
            id,
            title,
            price,
            company,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-capatalize text-slanted text-center">
                  {title}
                </div>
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6  my-3">
                    <img
                      src={img}
                      className="img-fluid"
                      alt="image wont load"
                    />
                  </div>
                  {/* text */}
                  <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                    <h2>model : {title}</h2>
                    <h4 className="text-capitalize text-muted mt-3 mb-2">
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h3 className="product">
                      <strong>
                        price : <span className="text-green">R {price}</span>
                      </strong>
                    </h3>
                    <p className="product text-capitalize mt-2 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead product">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

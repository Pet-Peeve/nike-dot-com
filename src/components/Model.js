import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contextAPI";
import styled from "styled-components";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item has been added to cart</h5>
                      <img
                        src={img}
                        alt="image wont load"
                        className="img-fluid"
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        price : <span className="text-green">R {price}</span>
                      </h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          back to products
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          check cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--colorWhite);
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
`;

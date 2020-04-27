import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../contextAPI";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="cart"></Title>
                <CartColumns></CartColumns>
                <CartList value={value}></CartList>
                <CartTotal
                  value={value}
                  history={this.props.history}
                ></CartTotal>
              </React.Fragment>
            );
          } else {
            return <EmptyCart></EmptyCart>;
          }
        }}
      </ProductConsumer>
    );
  }
}

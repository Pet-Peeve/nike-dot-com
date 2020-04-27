import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid d-none d-lg-block text-center">
        <div className="row">
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">products</p>
          </div>
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          {/* products */}
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 col-lg-4 text-center text-uppercase">
            <h1 className="display-3">404</h1>
            <h3>page not found</h3>
            <h3>
              the requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              is unreatchable
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

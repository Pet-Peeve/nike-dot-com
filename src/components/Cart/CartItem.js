import React from "react";

export default function CartItem({ item, value }) {
  const { img, title, price, count, total, id } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-1 text-capitalize text-center">
      {/* image */}
      <div className="col-10 col-lg-2 mx-auto">
        <img
          src={img}
          alt="image wont load"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      {/* product name */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize text-center">
          product :{" "}
        </span>
        {title}
      </div>
      {/* product price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize text-center">price : </span>
        {price}
      </div>
      {/* increment/decrement */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-outline-dark my-2 my-lg-0"
            onClick={() => console.log(decrement(id))}
          >
            -
          </span>
          <span className="mx-1"></span>
          <span className="btn btn-outline-dark my-2 my-lg-0">{count}</span>
          <span className="mx-1"></span>
          <span
            className="btn btn-outline-dark my-2 my-lg-0"
            onClick={() => console.log(increment(id))}
          >
            +
          </span>
        </div>
      </div>
      {/* remove */}
      <div className="col-10 mx-auto col-lg-2">
        <div
          onClick={() => removeItem(id)}
          className="btn btn-outline-danger my-1 my-lg-0"
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>
      {/* total */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize text-center">total : </span>
        {total}
      </div>
    </div>
  );
}

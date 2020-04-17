import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../nike-white-logo-4.png";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo wont load" />
        </Link>
        {/* links */}
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item ml-5">
            <Link to="##" className="nav-link">
              mens
            </Link>
          </li>
        </ul>
        {/* links */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="##" className="nav-link">
              womens
            </Link>
          </li>
        </ul>
        {/* links */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="##" className="nav-link">
              kids
            </Link>
          </li>
        </ul>
        {/* links */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="##" className="nav-link">
              collections
            </Link>
          </li>
        </ul>
        <form action="/action_page.php" className="navbar-form ml-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="search"
            />
            <div className="input-group-btn">
              <button className="btn btn-default search-btn" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--customBlack);
  .nav-link {
    color: white !important;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .nav-link:hover {
    background: var(--backHover);
    color: black !important;
  }
`;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../nike-white-logo-4.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* logo */}
            <Link to="/">
              <img src={logo} alt="logo wont load" />
            </Link>

            {/* navbar buttton */}
            <NavButton className="navbar-toggle ml-5 text-uppercase">
              mens
            </NavButton>
            {/* navbar buttton */}
            <NavButton className="navbar-toggle ml-5 text-uppercase">
              womens
            </NavButton>
            {/* navbar buttton */}
            <NavButton className="navbar-toggle ml-5 text-uppercase">
              kids
            </NavButton>
            {/* navbar buttton */}
            <NavButton className="navbar-toggle ml-5 text-uppercase">
              collections
            </NavButton>
          </div>
        </div>

        <Link to="/cart">
          <ButtonContainer className="mr-5">
            <i className="fas fa-cart-plus"></i>
          </ButtonContainer>
        </Link>

        {/*search bar */}
        <form action="/action_page.php" className="navbar-form ml-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="search"
            />
            <div className="input-group-btn search-btn">
              <button className="btn btn-default" type="submit">
                <i className="fas fa-search"></i>
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

const NavButton = styled.button`
  color: var(--customWhite);
  border: none;
  background: transparent;
  font-size: 1rem;
`;

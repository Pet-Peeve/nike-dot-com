import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  font-size: 1.4rem;
  border: 0.05rem solid black;
  color: black;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: var(--customWhite);
    color: white;
  }
  & focus {
    outline: none;
  }
`;

// {
//   /* cart button */
// }
// <Link to="/cart" className="ml-auto">
//   <ButtonContainer>
//     <span className="mr-2">
//       <i className="fas fa-cart-plus"></i>
//     </span>
//     my cart
//   </ButtonContainer>
// </Link>;

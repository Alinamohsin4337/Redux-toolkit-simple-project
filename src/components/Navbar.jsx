import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <CenterContent>
        <h1>Admin Table</h1>
      </CenterContent>
      <nav>
        <ul className="menuItems">
          <li className="fw-bold">Home</li>
          <li className="fw-bold">About</li>
          <li className="fw-bold">Projects</li>
          <li className="fw-bold">Code</li>
          <li className="fw-bold">Contact</li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  nav {
    margin: 3rem 0;
    background: #f9f9f9;
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
    padding-right: 2rem;
    width: 70%;
    position: relative;
    left: 15%;
  }
  nav .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  nav .menuItems li {
  }
  nav .menuItems li a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 100;
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }
  nav .menuItems li a::before {
    content: attr(data-item);
    transition: 0.5s;
    color: #8254ff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }
  nav .menuItems li a:hover::before {
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 998px) {
    nav .menuItems li {
      margin: 0.6rem 5rem;
    }
  }
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  text-align: center;
`;

export default Navbar;

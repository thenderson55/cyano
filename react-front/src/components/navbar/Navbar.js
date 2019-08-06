import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useStateValue } from "../../context/store";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  background-color: RGB(252, 196, 87);
  /* background-color: #bbd1de; */
  /* background-color: #99BACD; */
  color: black;
`;

const Logo = styled.div`
  padding: 0 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
`

const NavItems = styled.ul`
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  width: 35%;

  @media screen and (max-width:1024px) {
    width: 45%
  }

  @media screen and (max-width:768px) {
    position: absolute;
    right: 0px;
    height: 70vh;
    top: 5vh;
    background-color: RGB(252, 196, 87);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
  }
`

const NavItem = styled.li`
  list-style: none;
`

const Burger = styled.div`
  display: none;

  @media screen and (max-width:768px) {
    display: unset;
    padding:  0 30px;
  }
`
const Line = styled.div`
  width: 25px;
  height: 2px;
  margin: 5px;
  background-color: black;
`

export default function Navbar() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <NavWrapper>
      <Logo>{user}</Logo>
      <NavItems>
        <NavItem>
          <NavLink className="nav-link" to='/about'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to='/gallery'>Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to='/cart'>Cart</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to='/contact'>Contact</NavLink>
        </NavItem>
      </NavItems>

      <Burger>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Burger>

    </NavWrapper> 
  )
}

import React from 'react'
import { Navbar, Link } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Header1() {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light" className='d-flex justify-content-between' style={{ fontSize: "13px" }}>
                <Nav className="">
                    <Nav.Link href="#home">About Us |</Nav.Link>
                    <Nav.Link href="#features">My Account |</Nav.Link>
                    <Nav.Link href="#pricing">Wishlist |</Nav.Link>
                    <Nav.Link href="#pricing">Order Tracking</Nav.Link>
                </Nav>
                <Nav className="">
                    <Nav.Link href="#home">Trendy 25silver jewelry, save up 35% off today</Nav.Link>
                </Nav>
                <Nav className="">
                    <Nav.Link href="#home"> Need help? Call Us:<span style={{ color: "#3BB77E", fontWeight: "600" }}>+ 1800 900 |</span></Nav.Link>
                    <select name="" id="" style={{ border:"none",outline: "none",backgroundColor : "transparent"}}>
                        <option value="">English</option>
                        <option value="">Francais</option>
                        <option value="">Deutesch</option>
                        <option value="">Pyccknn</option>
                    </select>
                    <select name="" id="" style={{ border:"none",outline: "none" , backgroundColor : "transparent"}}>
                        <option value="">USD</option>
                        <option value="">INI</option>
                        <option value="">ME</option>
                        <option value="">UE</option>
                    </select>
                </Nav>
            </Navbar>
    </div>
  )
}

export default Header1
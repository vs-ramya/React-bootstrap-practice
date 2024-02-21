import { Fragment } from "react";
import { Nav,Navbar,Container} from "react-bootstrap";
import Cards from "./Card";
import Cart from "./CartButton";
import {NavLink} from "react-router-dom";

const Navigation=(() => {
   
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
       
         
          <Nav className="mx-auto" >
            <NavLink to="/Home" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>HOME</NavLink>
            </Nav>
            <Nav className="mx-auto">
            <NavLink href="#features" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>STORE</NavLink>
            </Nav>
            <Nav className="mx-auto">
            <NavLink to="/About" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}} >ABOUT </NavLink>
            </Nav>
            <Nav className="mx-auto">
            <NavLink to="/ContactUs" style={{ color: "white", fontSize: "35px", fontFamily: "sans-serif" }}>CONTACT US</NavLink>
            </Nav>
            <Nav className="mx-auto">

            
            <Cart/>
           </Nav>
          </Container>
      </Navbar>
     
      <Cards/>

        </Fragment>

    )
})
export default Navigation;      
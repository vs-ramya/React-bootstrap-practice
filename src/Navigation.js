import { Fragment } from "react";
import { Nav,Navbar,Container} from "react-bootstrap";
import Cards from "./Card";
import Cart from "./CartButton";

const Navigation=(() => {
   
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="mx-auto" >
            <Nav.Link href="#home" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>HOME</Nav.Link>
            <Nav.Link href="#features" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>STORE</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>ABOUT</Nav.Link>
            
            <Cart/>
           </Nav>
          </Container>
      </Navbar>
      <Cards/>

        </Fragment>

    )
})
export default Navigation;
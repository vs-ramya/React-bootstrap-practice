import { Fragment } from "react";
import { Nav,Navbar,Container ,Button} from "react-bootstrap";
import Cards from "./Card";

const Navigation=(() => {
   
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="mx-auto" >
            <Nav.Link href="#home" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>HOME</Nav.Link>
            <Nav.Link href="#features" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>STORE</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif"}}>ABOUT</Nav.Link>
            
             <Button variant="dark" style={{color:"white",fontSize:'35px',fontFamily:"sans-serif",marginRight:10,paddingRight:'20px' }}>Cart</Button>

           </Nav>
          </Container>
      </Navbar>
      <Cards/>

        </Fragment>

    )
})
export default Navigation;
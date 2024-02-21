import React from 'react';
import { Container, Row, Col, Button,Card } from 'react-bootstrap';


function EventList() {
    let CardStyle={
        fontFamily:'Arial',
        fontSize:'60 px',
        color:"white",
        textAlign:"center",
        backgroundColor: "grey"
    }
  return (
    <div>
        <Card>
        <Card.Body style={CardStyle}><h2>GENERICS</h2>
        <div style={{textAlign:'center',justifyContent:'center'}}>
        <Button variant="outline-info" >Get The Latest Album</Button>{' '}
        </div>
        <div style={{textAlign:'center',justifyContent:'center'}}> 
      <Button variant="primary" size="lg">Play</Button>
      </div>
      <div style={{textAlign:'center',justifyContent:'center'}}>
      
      <h2>TOURS</h2>
      </div>
      </Card.Body>
      </Card>
      <Container>
      <Row className="justify-content-center">
        <Col>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div>
              <span style={{ marginRight: '25px' }}>Feb 20</span>  
              <span style={{ marginRight: '25px' }}>Pheonix Mall</span> 
              <span  style={{ marginRight: '25px' }}>Ayalaan</span> 
            </div>
            <Button variant="primary">Buy Tickets</Button>
          </div>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div>
              <span style={{ marginRight: '25px' }}>Feb 27</span>  
              <span style={{ marginRight: '25px' }}>Marina Mall</span> 
              <span  style={{ marginRight: '25px' }}>Laal Salaam</span> 
            </div>
            <Button variant="primary">Buy Tickets</Button>
          </div>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div>
              <span style={{ marginRight: '25px' }}>Mar 2</span>  
              <span style={{ marginRight: '25px' }}>VR Mall</span> 
              <span  style={{ marginRight: '25px' }}>GOAT</span>
            </div>
            <Button variant="primary">Buy Tickets</Button>
          </div>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div>
              <span style={{ marginRight: '25px' }}>Mar 20</span>  
              <span style={{ marginRight: '25px' }}>Pheonix Mall</span> 
              <span  style={{ marginRight: '25px' }}>Leo</span> 
            </div>
            <Button variant="primary">Buy Tickets</Button>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default EventList;
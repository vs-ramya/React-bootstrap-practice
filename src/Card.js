
import { Card } from "react-bootstrap"
function Cards() {
    let CardStyle={
        fontFamily:'Arial',
        fontSize:'60 px',
        color:"white",
        textAlign:"center",
        backgroundColor: "grey"
    }
    return (
        <Card >
        <Card.Body style={CardStyle}><h2>GENERICS</h2></Card.Body>
      </Card>
  
    )
}
export default Cards;
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Cart = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [cartElements, setCartElements] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]);//Becoz changes need to be reflected in the cart when i click remove button

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const removeItem = (index) => {
        const updatedCartElements = [...cartElements];
        updatedCartElements.splice(index, 1);//  splice remove the indicated index and 1 indicates to remove only one cart item
        setCartElements(updatedCartElements); // Update state with the updated cart items
    };

    const cartItems = cartElements.map((item, index) => (
        <li key={index}>
            {item.title} - ${item.price}
            <Button variant="danger" size="sm" onClick={() => removeItem(index)}>Remove</Button>
        </li>
    ));

    return (
        <div>
            <Button onClick={handleShowModal}>Cart</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>{cartItems}</ul>
                    <div>Total: ${cartElements.reduce((acc, item) => acc + item.price, 0)}</div>
                   {/*reduce is a method like map used to iterate the list ,it starts with a accumulator value 0 and then adds the price now acc updates the new price as acc (0+34=34)(34+40=74) */}
                   </Modal.Body>
                   <Modal.Footer>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <Button>Purchase</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;

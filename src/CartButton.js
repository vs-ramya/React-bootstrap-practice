import React, { useState } from 'react';
import { Button, Modal, Badge } from 'react-bootstrap';

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
    ]);

    // Function to handle showing the modal
    const handleShowModal = () => setShowModal(true);
    
    // Function to handle closing the modal
    const handleCloseModal = () => setShowModal(false);

    // Function to remove an item from the cart
    const removeItem = (index) => {
        const updatedCartElements = [...cartElements];
        updatedCartElements.splice(index, 1);
        setCartElements(updatedCartElements);
    };

    // Calculate total price by reducing cart elements' prices
    const totalPrice = cartElements.reduce((acc, item) => acc + item.price, 0);

    // Calculate total quantity of items in cart
    const totalQuantity = cartElements.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <Button onClick={handleShowModal}>
                Cart <Badge bg="secondary">{totalQuantity}</Badge>
            </Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {cartElements.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price}
                                <Button variant="danger" size="sm" onClick={() => removeItem(index)}>Remove</Button>
                            </li>
                        ))}
                    </ul>
                    <div>Total: ${totalPrice}</div>
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
import { useState } from "react";

import { Button, Modal } from "react-bootstrap";


const CartItem = ({ cart }) => {

    const totalSum = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
	const totalItems = Object.keys(cart).length;

	const [showModal, setShowModal] = useState(false);
	const handleModal = () => setShowModal(!showModal);

    return (
        <div className="d-flex">
						<Modal show={showModal} onHide={handleModal}>
							<Modal.Header closeButton>
								<Modal.Title>Your cart, total items: {totalItems}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="productCart">
									<ul>
										{totalItems === 0 ? 'The Cart is empty :(' : cart.map((product) => (
											<li key={product.id} className="productList">
												<img
													src={product.image}
													alt={product.title}
													style={{
														"max-width": "150px",
														"padding-right": "15px",
													}}
												/>
												{product.title} - {product.price}$
											</li>
										))}
									</ul>
									<div className="productCart__sum">
										<p>Summary</p>
										<p>Products: {totalSum}$</p>
										<p>Shipping: Free!</p>
										<p>Total amount (including VAT): {totalSum}$</p>
									</div>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleModal}>
									Close
								</Button>
								<Button variant="primary" onClick={handleModal}>
									Make a order!
								</Button>
							</Modal.Footer>
						</Modal>
						<button className="btn btn-outline-dark" onClick={handleModal}>
							<i className="bi-cart-fill me-1"></i>
							Cart
							<span className="badge bg-dark text-white ms-1 rounded-pill">
								{totalItems}
							</span>
						</button>
					</div>
    )
}

export default CartItem;
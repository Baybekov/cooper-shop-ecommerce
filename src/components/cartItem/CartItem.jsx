import { useState } from "react";

import { Button, Modal } from "react-bootstrap";

const CartItem = ({ cart, removeFromCart }) => {
	const totalSum = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0).toFixed(2);
	const totalItems = Object.keys(cart).length;



	const [showModal, setShowModal] = useState(false);
	const handleModal = () => setShowModal(!showModal);

	const handleRemove = (productId) => {
		removeFromCart(productId);
	};

	return (
		<div className="d-flex">
			<Modal show={showModal} onHide={handleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Your cart, total items: {totalItems}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="productCart">
						<ul>
							{totalItems === 0
								? "The Cart is empty :("
								: cart
										.reduce((unique, item) => {
											return unique.includes(item) ? unique : [...unique, item];
										}, [])
										.map((product) => (
											<li key={product.id} className="productList">
												<div className="productList-info">
													<img
														src={product.image}
														alt={product.title}
														style={{
															maxWidth: "150px",
															paddingRight: "15px",
														}}
													/>
													{product.title} - {product.price} $ x {product.amount} | Sum - {product.price*product.amount}$
												</div>

												<div className="productList-btn">
													<button
														className="btn btn-danger ms-3"
														onClick={() => handleRemove(product.id)}
													>
														Remove
													</button>
												</div>
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
	);
};

export default CartItem;

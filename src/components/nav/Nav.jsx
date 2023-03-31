import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Nav = ({ cart }) => {
	const totalSum = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
	const totalItems = Object.keys(cart).length;

	const [showModal, setShowModal] = useState(false);
	const handleModal = () => setShowModal(!showModal);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container px-4 px-lg-5">
				<a className="navbar-brand" href="#!">
					Copper Shop
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#!">
								Home
							</a>
						</li>
						
						
					</ul>
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
				</div>
			</div>
		</nav>
	);
};

export default Nav;

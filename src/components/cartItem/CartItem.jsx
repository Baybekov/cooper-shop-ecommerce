import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";


import { Button, Modal } from "react-bootstrap";

import './cartItem.css'



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
															maxHeight: "200px",
															paddingRight: "15px",
                              objectFit: 'contain'
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
         
          <StripeButton totalSum={totalSum}/>
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

const StripeButton = (totalSum) => {
  const onToken = (token) => {
    console.log(token);
    alert("Оплата прошла успешно!");
  };
  let obj = totalSum;
  let str = obj.totalSum;
  let num = Number(str);
  let str2 = num.toString().replace('.', '');
  return (
    <StripeCheckout
      token={onToken}
      stripeKey="pk_test_51MsmdaAzoypDeqB95PbVFldK7tfkyRwOGyGePCv4XtnZC5NMvoKFNDGWQZCzakY35KPDzGfIproPsSg5Ksps2I4z00qKIm9NM2"
      name="Cooper Store"
      description="Awesome product"
      amount={str2}
      currency="USD"
      image="https://img.freepik.com/free-vector/branding-identity-corporate-c-logo-vector-design-template_460848-13936.jpg"
      email="customer@example.com"
      billingAddress
      shippingAddress
    >
       <Button variant="primary">
						Make a order!
					</Button>
    </StripeCheckout>
  );
};

export default CartItem;

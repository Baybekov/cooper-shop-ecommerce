import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ListItems = ({ productId, addToCart }) => {
	const [itemsList, setItemsList] = useState([]);
	const [cart, setCart] = useState([]);
	const [offset, setOffset] = useState(8);

	useEffect(() => {
		sendRequest(offset);
	}, [productId]);

	const sendRequest = (offset) => {
		fetch(`https://fakestoreapi.com/products?limit=${offset}`)
			.then((response) => response.json())
			.then((data) => setItemsList([...data]))
			.then(() => setOffset(offset + 8))
			.catch((error) => console.error(error));
	};


	const toCart = (product) => {
		setCart([...cart, product]);
		addToCart(product);
	};

	function renderItems(arr) {
		const items = arr.map((item,  i) => {
			return (
				<div className="col mb-5" key={i}>
					<div className="card h-100 p-3">
						<img className="card-img-top" src={item.image} alt={item.title} style={{
															maxHeight: "200px",
															paddingRight: "15px",
                              objectFit: 'contain'
														}}/>

						<div className="card-body p-4">
							<div className="text-center">
								<h4 className="fw-bolder text-center">{item.title.slice(0, 32)}...</h4>
								<h5 className="fw-bolder">{item.name}</h5>
								{item.price}$ <br />
								<Link to={`/${item.id}`}>Show more</Link>
							</div>
							
						</div>

						
						<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
							<div className="text-center">
								<button
									className="btn btn-outline-dark mt-auto"
									onClick={() => toCart(item)}
								>
									To cart
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		});

		return <>{items}</>;
	}

	const items = renderItems(itemsList);

	return (
		<>
			{items}
			<Button variant="dark" onClick={() => sendRequest(offset)}>
				Load more...
			</Button>
		</>
	);
};

export default ListItems;

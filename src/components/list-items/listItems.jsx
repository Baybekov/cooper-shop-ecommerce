import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListItems = ({productId,  addToCart}) => {
	const [itemsList, setItemsList] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=20")
			.then((response) => response.json())
			.then((data) => setItemsList(data))
			.catch((error) => console.error(error));
	}, [productId]);


	const toCart = (product) => {
		setCart([...cart, product]);
		addToCart(product);
	};


	function renderItems(arr) {
		const items = arr.map((item) => {
			return (
				<div className="col mb-5" key={item.id}>
					<div className="card h-100 p-3">
						<img className="card-img-top" src={item.image} alt="..." />

						<div className="card-body p-4">
							<div className="text-center">
								<h4 className="fw-bolder text-center">{item.title}</h4>
								<h5 className="fw-bolder">{item.name}</h5>
								{item.price}$
							</div>
						</div>
						<Link to={`${item.id}`}>
                    <p>Test</p>
                </Link>
						<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
							<div className="text-center">
								<button className="btn btn-outline-dark mt-auto"
                                onClick={() => toCart(item)}>
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

	return <>{items}</>;
};

export default ListItems;

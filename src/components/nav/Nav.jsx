import React from "react";
import { Link } from "react-router-dom";

import CartItem from "../cartItem/CartItem";

const Nav = ({ cart }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container px-4 px-lg-5">
				<Link className="navbar-brand" to="/">
					Copper Shop
				</Link>
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
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<CartItem cart={cart} />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

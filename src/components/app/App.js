import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainPage from "../pages/MainPage";
import ItemPage from "../pages/ItemPage";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [cart, setCart] = useState([]);

	const removeFromCart = (id) => {
		const updatedCart = cart.filter((item) => item.id !== id);
		setCart(updatedCart);
	};
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<MainPage
								cart={cart}
								setCart={setCart}
								removeFromCart={removeFromCart}
							/>
						}
					/>
					<Route
						path="/:id"
						element={
							<ItemPage
								cart={cart}
								setCart={setCart}
								removeFromCart={removeFromCart}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

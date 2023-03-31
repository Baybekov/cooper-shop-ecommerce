import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import MainPage from "../pages/MainPage";
import ItemPage from "../pages/ItemPage";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [cart, setCart] = useState([]);
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage  cart={cart} setCart={setCart}/>} />
					<Route path="/:id" element={<ItemPage cart={cart}/>} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

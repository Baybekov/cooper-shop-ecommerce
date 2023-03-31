import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import Nav from "../nav/Nav";
import Header from "../header/Header";
import Footer from "../footer/footer";

const ItemPage = () => {
	const { id } = useParams();

	const [product, setProduct] = useState(null);
    const [cart] = useState([]);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((response) => response.json())
			.then((data) => setProduct(data));
	}, [id]);

	return (
        <>
        <Nav cart={cart}/>
        <Header />
		<Container>
			<Row>
				<Col>
					{product ? (
						<div>
							<h1>{product.title}</h1>
							<img
								src={product.image}
								alt={product.title}
								style={{ "max-width": "150px" }}
							/>
							<p>{product.description} | {product.category}</p>
                            <p>{product.price}$</p>
							<Link to='/'>
								<Button variant="outline-secondary">Back to store</Button>
							</Link>
						</div>
					) : (
						<p>Loading...</p>
					)}
				</Col>
			</Row>
		</Container>
        <Footer />
        </>
	);
};

export default ItemPage;

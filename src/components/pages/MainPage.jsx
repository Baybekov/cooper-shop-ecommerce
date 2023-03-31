import Nav from "../nav/Nav";
import Header from "../header/Header";
import ListItems from "../list-items/listItems";
import Footer from "../footer/footer";



function MainPage(props) {
	const {cart, setCart} = props;
	const addToCart = (product) => {
	  setCart([...cart, product]);
	};

	return (
	  <div className="App">
		<Nav cart={cart}/>
		<Header />
		<section className="py-5">
		  <div className="container px-4 px-lg-5 mt-5">
			<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
			  <ListItems addToCart={addToCart}/>
			</div>
			
		  </div>
		
		</section>
		<Footer />
	  </div>
	);
  }
  
  export default MainPage;
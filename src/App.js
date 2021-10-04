import DisplayProducts from "./Components/DisplayProducts/DisplayProducts";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Product from "./Components/Product/Product";
import ProductsCart from "./Components/ProductsCart/ProductsCart";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
            <DisplayProducts />
            <Footer />
          </Route>
          <Route exact path="/">
            <Home />
            <DisplayProducts />
            <Footer />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/products/cart">
            <ProductsCart />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

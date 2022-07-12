import "../css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import ShoppingCart from "../pages/ShoppingCart";
import Header from "../containers/Header";
import Product from "../containers/Product";
import Searcheds from "../pages/Searcheds";
import { useFetch } from "../hooks/useFetch";

function App() {
  const {
    products,
    setProducts,
    search,
    setSearch,
    searchedProducts,
    count,
    setCount,
  } = useFetch();
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/comprar" exact element={<ShoppingCart />} />
        <Route
          path="/products/:id"
          exact
          element={<Product products={products} />}
        />
        <Route
          path="/searcheds"
          exact
          element={<Searcheds searchedProducts={searchedProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

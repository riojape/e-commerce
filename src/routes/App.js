import "../css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../containers/Header";
import Product from "../containers/Product";
import Searcheds from "../pages/Searcheds";
import { useFetch } from "../hooks/useFetch";
import Shopping from "../containers/Shopping";

function App() {
  const {
    products,
    setProducts,
    search,
    setSearch,
    searchedProducts,
    count,
    setCount,
    selecteds,
    setSelecteds,
  } = useFetch();
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} count={count} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home count={count} setCount={setCount} />}
        />
        <Route
          path="/comprar"
          exact
          element={
            <Shopping selecteds={selecteds} setSelecteds={setSelecteds} />
          }
        />
        <Route
          path="/products/:id"
          exact
          element={
            <Product products={products} count={count} setCount={setCount} />
          }
        />
        <Route
          path="/searcheds"
          exact
          element={
            <Searcheds
              searchedProducts={searchedProducts}
              count={count}
              setCount={setCount}
              selecteds={selecteds}
              setSelecteds={setSelecteds}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import Product from "../pages/Product";
import Searcheds from "../pages/Searcheds";
import Shopping from "../pages/Shopping";
import { EcommerceProvider } from "../context/EcommerceProvider";

function App() {
  return (
    <EcommerceProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/comprar" exact element={<Shopping />} />
          <Route path="/products/:id" exact element={<Product />} />
          <Route path="/searcheds" exact element={<Searcheds />} />
        </Routes>
      </BrowserRouter>
    </EcommerceProvider>
  );
}

export default App;


import '../css/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Header from '../containers/Header';

function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/comprar' exact element={<ShoppingCart />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

import { IconButton, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar";
import "../css/Header.css";
import heineken from "../assets/heineken-logo.svg";
import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Header = ({ setSearch, count }) => {
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={heineken} alt="logo" />
      </NavLink>
      <Navbar></Navbar>
      <div className="searcher-icons">
        <TextField
          sx={{ left: "35px" }}
          id="outlined-basic"
          className="searcher"
          label="Searcher"
          variant="outlined"
          size="small"
          onChange={onChange}
        />
        <NavLink to="/searcheds">
          <IconButton>
            <SearchIcon className="searcher-icon" fontSize="large"></SearchIcon>
          </IconButton>
        </NavLink>
        <div className="shopping-cart">
          <NavLink to="/comprar">
            <IconButton>
              <ShoppingCartIcon
                className="shop-cart-icon"
                fontSize="large"
              ></ShoppingCartIcon>
            </IconButton>
          </NavLink>
          <span className="shop-number">{count}</span>
        </div>
        <MenuIcon className="menu-icon" fontSize="large"></MenuIcon>
      </div>
    </header>
  );
};

export default Header;

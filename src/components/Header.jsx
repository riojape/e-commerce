import { IconButton, TextField } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Header.css';
import NavBar from './NavBar';

const Header = () => {
  /*const onChange = (e) => {
    console.log(e.target.value);
  };*/

  return (
    <header className="header">
      <span>LG</span>
      <NavBar></NavBar>
      <div className="searcher-container">
        <TextField 
          id="outlined-basic"
          className="searcher"
          label="Searcher" 
          variant="outlined" 
          size='small' 
        />
        <IconButton sx={{ left: "-35px"}}>
          <SearchIcon className="searcher-icon" fontSize="large"></SearchIcon>
        </IconButton>
        
      </div>
      <IconButton>
        <ShoppingCartIcon className="shop-cart-icon" fontSize="large"></ShoppingCartIcon>
      </IconButton>
      {/* <MenuIcon className="menu-icon" fontSize="large"></MenuIcon> */}
    </header>
  )
}

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/tienda">Tienda</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

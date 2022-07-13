import React, { createContext, useState } from "react";
import { data } from "../data";

export const EcommerceContext = createContext();

const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [selecteds, setSelecteds] = useState([]);

  let searchedProducts = [];

  if (!search.length >= 1) {
    searchedProducts = products;
  } else {
    searchedProducts = products.filter((product) => {
      const nameText = product.name.toLowerCase();
      const searchText = search.toLowerCase();
      return nameText.includes(searchText);
    });
  }
  /*let product = [];
  const onClickProduct = (id) => {

  }*/

  return (
    <EcommerceContext.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        searchedProducts,
        count,
        setCount,
        selecteds,
        setSelecteds,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export { EcommerceProvider };

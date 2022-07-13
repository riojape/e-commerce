import { useState } from "react";
import { data } from "../data";

function useFetch(id) {
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

  return {
    products,
    setProducts,
    search,
    setSearch,
    searchedProducts,
    count,
    setCount,
    selecteds,
    setSelecteds,
  };
}

export { useFetch };

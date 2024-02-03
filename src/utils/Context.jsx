/* eslint-disable react/prop-types */
import { instance as axios } from "./axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function Context(props) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      // Fetch data from the server
      const { data: serverData } = await axios.get("/products");

      // Retrieve data from local storage
      const localStorageData = JSON.parse(localStorage.getItem("products")) || [];

      // Merge server data with local storage data
      const mergedData = [...localStorageData, ...serverData];

      // Set the merged data as the products state
      setProducts(mergedData);
    } catch (error) {
      console.error("Getting all products, ERROR:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

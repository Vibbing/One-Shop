import { instance as axios } from "./axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function Context(props) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
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

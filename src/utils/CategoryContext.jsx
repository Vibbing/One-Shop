/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { instance as axios } from "./axios";

export const CategoryContext = createContext();

export default function CategoryContextPro(props) {
  const [category, setCategory] = useState([]);
  

  const getSpecifiedCategoryData = async (categoryValue) => {
    try {
      const { data } = await axios.get(`/products/category/${categoryValue}`);
      setCategory(data);
    } catch (error) {
      console.error("Failed to get the specified category data ERROR:", error);
    }
  };


 return(
    <CategoryContext.Provider value={{category,setCategory,getSpecifiedCategoryData}}>
        {props.children}
    </CategoryContext.Provider>
 )
}

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import ProductDetails from "../components/productDetails/ProductDetails";
import Card from "../components/card/Card";
import AddNewProduct from "../components/AddProduct";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Card />} />
      <Route path="/product-details/:proId" element={<ProductDetails />} />
      <Route path="/add-new-product" element={<AddNewProduct />} />
    </Route>
  )
);

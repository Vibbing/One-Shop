import { useEffect, useState } from "react";
import { instance as axios } from "../../utils/axios.jsx";
import { useParams } from "react-router-dom";
import ProductDetailsShimmer from "./ProductDetailsShimmer.jsx";

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const { proId } = useParams();

  const getTheRespectiveProductDetails = async () => {
    try {
      const product = await axios.get(`/products/${proId}`);
      const fakeProductData = product.data;
      console.log(fakeProductData,";;;;;;;")

      const localStoragePRoducts = JSON.parse(localStorage.getItem("products"));

      const productFromLocalStorage = localStoragePRoducts?.find(
        (product) => product.id == proId
      );

      const productData = productFromLocalStorage
        ? productFromLocalStorage
        : fakeProductData;
        
      setProductData(productData);
    } catch (error) {
      console.error("Getting Product details ERROR:", error);
    }
  };

  useEffect(() => {
    getTheRespectiveProductDetails();
  }, [proId]);

  return productData ? (
    <div className="w-full h-full flex justify-center items-center gap-10">
      <img
        className="w-[40%] h-[60%] object-contain "
        src={productData?.image}
        alt=""
      />
      <div className="w-[40%] ">
        <small className="font-thin text-gray-800">
          {productData?.category}
        </small>
        <h1 className="text-3xl mb-5 w-[70%]">{productData?.title}</h1>
        <h3 className="mb-4 w-[60%] text-s text-gray-600">
          {productData?.description}
        </h3>
        <h4 className="mb-5 text-3xl text-gray-700">${productData?.price}</h4>
        {/* <div className=" flex gap-5 ">
          <button className="bg-blue-200 w-[15%] p-1  mt-5 rounded-lg border-2 border-blue-400 shadow-lg font-semibold hover:scale-110 hover:bg-blue-300">
            Edit
          </button>
          <button className="bg-red-200 w-[15%] p-1  mt-5 rounded-lg border-2 border-red-400 shadow-lg font-semibold hover:scale-110 hover:bg-red-300">
            Delete
          </button>
        </div> */}
      </div>
    </div>
  ) : (
    <ProductDetailsShimmer />
  );
}

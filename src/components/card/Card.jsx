import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../utils/Context";
import Loading from "./CardShimmer";
import { CategoryContext } from "../../utils/CategoryContext";

export default function Card() {
  const [products] = useContext(ProductContext);
  const { category } = useContext(CategoryContext);
  const cardContent = category.length > 0 ? category : products;

  return products.length > 0 ? (
    <>
      {cardContent.map((product) => (
        <div
          key={product.id}
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 w-[25%] h-[46vh] px-2 py-1 flex flex-col justify-start items-center gap-2 shadow-2xl rounded-2xl"
        >
          <span className="text-end w-full ">
            {product.rating?.rate ?? (Math.random() * 6).toFixed(1)}
            <span className="text-yellow-400 text-xl"> ☆</span>
          </span>
          <Link
            to={`/product-details/${product.id}`}
            className="w-full flex items-center justify-center"
          >
            <img
              className=" hover:scale-110 w-[70%] h-[20vh] object-contain"
              src={product?.image}
              alt=""
            />
          </Link>
          <h1 className=" text-s text-center hover:text-blue-400">
            {product?.title}
          </h1>
          <small>${product?.price}</small>
        </div>
      ))}
    </>
  ) : (
    <Loading />
  );
}

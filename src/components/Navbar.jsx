import { useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { CategoryContext } from "../utils/CategoryContext";

export default function Navbar() {
  const [products] = useContext(ProductContext);
  const getAllCategories = products.reduce(
    (acc, cv) => [...acc, cv.category],
    []
  );

  const uniqueCategories = [...new Set(getAllCategories)];

  const color = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 0.5)`;
  };
 
  const { getSpecifiedCategoryData,setCategory } = useContext(CategoryContext);

  const handleCategoryCall = (categoryValue) => {
    getSpecifiedCategoryData(categoryValue);
  };

  const getAllProductsBack = () => {
    setCategory([])
  }

  return (
    <div className="flex flex-col w-full h-full justify-between items-center">
      <div>
        <NavLink
        onClick={()=>getAllProductsBack()}
          to="/"
          className={({ isActive }) =>
            [
              "mt-5 text-lg",
              isActive ? "text-red-600 font-semibold text-xl" : "text-black",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product-details"
          className={({ isActive }) =>
            [
              "mt-5 text-lg",
              isActive ? "text-red-600 font-semibold text-xl" : "text-black",
            ].join(" ")
          }
        ></NavLink>
      </div>

      <div className="mb-5 text-center">
        <h1 className="mb-2 font-bold text-2xl leading-tight">Category List</h1>
        <div className="w-full h-full p-2 flex text-center justify-center items-center gap-1 flex-wrap ">
          {uniqueCategories.map((category, index) => (
            <div key={index} className="w-full flex ml-4 items-center gap-1">
              <div
                style={{ backgroundColor: color() }}
                className="w-3 h-3 rounded-full"
              ></div>
              <Link
                to={`/?category=${category}`}
                onClick={() => handleCategoryCall(category)}
                className="hover:font-semibold uppercase"
              >
                {category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

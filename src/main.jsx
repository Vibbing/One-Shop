import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./utils/Routes.jsx";
import Context from "./utils/Context.jsx";
import CategoryContextPro from "./utils/CategoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryContextPro>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </CategoryContextPro>
);

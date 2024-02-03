import { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";

export default function AddNewProduct() {
  const [products, setProducts] = useContext(ProductContext);
const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    image: Yup.string()
      .required("Image Url is required")
      .min(15, "Image Url must be at least 15 characters"),
    title: Yup.string()
      .required("Title is required")
      .min(5, "Title must be at least 5 characters"),
    category: Yup.string()
      .required("Category is required")
      .min(5, "Category must be at least 5 characters"),
    price: Yup.number()
      .required("Price is required")
      .min(1, "Price must be at least greater than 1"),
    description: Yup.string()
      .required("Description is required")
      .min(15, "Description must be at least 15 characters"),
  });

  const formik = useFormik({
    initialValues: {
      id: nanoid(),
      image: "",
      title: "",
      category: "",
      price: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);

      const existingProductData =
        JSON.parse(localStorage.getItem("products")) || [];

      existingProductData.push(values);

      localStorage.setItem("products", JSON.stringify(existingProductData));

      const totalProductData = [...existingProductData, ...products];
      setProducts(totalProductData);
      navigate('/')
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" w-full h-full flex flex-col justify-start items-center gap-4 p-20"
    >
      <h1 className="text-2xl">Add New Product</h1>
      <input
        type="url"
        name="image"
        className="w-1/4 h-8 p-3 rounded-lg text-lg bg-zinc-200"
        placeholder="Image Url"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      {formik.errors.image && (
        <small className="text-red-500">{formik.errors.image}</small>
      )}
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-1/4 h-8 p-3 rounded-lg text-lg bg-zinc-200"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && (
        <small className="text-red-500">{formik.errors.title}</small>
      )}

      <div className="w-1/4 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-2/4 h-8 p-3 rounded-lg text-lg bg-zinc-200"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik.errors.category && (
          <small className="text-red-500">{formik.errors.category}</small>
        )}

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-2/5 h-8 p-3 rounded-lg text-lg bg-zinc-200"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price && (
          <small className="text-red-500">{formik.errors.price}</small>
        )}
      </div>
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        className="w-1/4 h-32 p-3 rounded-lg text-lg bg-zinc-200"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {formik.errors.description && (
        <small className="text-red-500">{formik.errors.description}</small>
      )}

      <div className=" w-1/5 flex justify-between">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-2/5 text-lg rounded-lg bg-blue-300 border-2 border-blue-400 hover:scale-110 hover:bg-blue-400"
        >
          Save
        </button>
        <Link
          to={"/"}
          className="w-2/5  text-lg rounded-lg bg-red-300 border-2 border-red-400 hover:scale-110 hover:bg-red-400 "
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

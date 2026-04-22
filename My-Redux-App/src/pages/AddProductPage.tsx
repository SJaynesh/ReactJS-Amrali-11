import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../features/product/productSlice";

export default function AddProductPage() {
  const [productData, setProductData] = useState({
    id: Math.floor(Math.random() * 10000),
    p_name: "",
    p_price: 0,
    p_stock: 0,
    p_image: "",
    p_category: "",
    p_description: "",
  });

  const [error, setError] = useState<any>({});

  const dispatch = useDispatch();

  const validation = () => {
    let errorMessage: any = {};

    if (!productData.p_name) {
      errorMessage.p_name = "product name is required...";
    }

    if (productData.p_price === 0) {
      errorMessage.p_price = "product price is required...";
    }

    if (productData.p_price < 0) {
      errorMessage.p_price = "please enter valide product price";
    }

    if (productData.p_stock === 0) {
      errorMessage.p_stock = "product stock is required...";
    }

    if (productData.p_stock < 0) {
      errorMessage.p_stock = "please enter valide product stock";
    }

    if (!productData.p_category) {
      errorMessage.p_category = "product category is required..";
    }

    if (!productData.p_image) {
      errorMessage.p_image = "product image is required..";
    }

    if (!productData.p_description) {
      errorMessage.p_description = "product description is required..";
    }

    setError(errorMessage);

    return Object.keys(errorMessage).length === 0;

    // 6 === 0 // false
  };

  const onSubmit = (event: any) => {
    event.preventDefault();

    console.log("Form Submitted...");

    if (!validation()) {
      return;
    }

    // if (!productData.p_name) {
    //   toast.error("product name is required...");
    //   return;
    // }

    // if (productData.p_price === 0) {
    //   toast.error("product price is required...");
    //   return;
    // } else if (productData.p_price < 0) {
    //   toast.error("please enter valid price..");
    //   return;
    // }

    // if (productData.p_stock === 0) {
    //   toast.error("product stock is required...");
    //   return;
    // }

    // if (!productData.p_category) {
    //   toast.error("product category is required...");
    //   return;
    // }

    // if (!productData.p_image) {
    //   toast.error("product image is required...");
    //   return;
    // }

    // if (!productData.p_description) {
    //   toast.error("product description is required...");
    //   return;
    // }

    dispatch(addProduct(productData));

    toast.success("Product added successfully..");

    setProductData({
      id: Math.floor(Math.random() * 10000),
      p_name: "",
      p_price: 0,
      p_stock: 0,
      p_image: "",
      p_category: "",
      p_description: "",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Add New Product
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the information below to list a new item in your store
            inventory.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden"
        >
          <div className="p-8 space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="p_name"
                value={productData.p_name}
                onChange={(event) => {
                  setProductData((productData) => ({
                    ...productData,
                    p_name: event.target.value,
                  }));
                }}
                placeholder="e.g. Wireless Bluetooth Headphones"
                className={`w-full px-4 py-3 rounded-xl border ${error.p_name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
              />

              {error.p_name && <p className="text-red-500">{error.p_name}</p>}
            </div>

            {/* Row: Price, Stock, Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="p_price"
                  value={productData.p_price}
                  onChange={(event) => {
                    setProductData((productData) => ({
                      ...productData,
                      p_price: Number(event.target.value),
                    }));
                  }}
                  placeholder="0.00"
                  className={`w-full px-4 py-3 rounded-xl border ${error.p_price ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
                />
                {error.p_price && (
                  <p className="text-red-500">{error.p_price}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="p_stock"
                  value={productData.p_stock}
                  onChange={(event) => {
                    setProductData((productData) => ({
                      ...productData,
                      p_stock: Number(event.target.value),
                    }));
                  }}
                  placeholder="0"
                  className={`w-full px-4 py-3 rounded-xl border ${error.p_stock ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
                />
                {error.p_stock && (
                  <p className="text-red-500">{error.p_stock}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="p_category"
                  value={productData.p_category}
                  onChange={(event) => {
                    setProductData((productData) => ({
                      ...productData,
                      p_category: event.target.value,
                    }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border ${error.p_category ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
                >
                  <option value="Select">Select Category</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Home & Living">Home & Living</option>
                  <option value="Fashion">Fashion</option>
                </select>
                {error.p_category && (
                  <p className="text-red-500">{error.p_category}</p>
                )}
              </div>
            </div>

            {/* Product Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Image URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="p_image"
                  value={productData.p_image}
                  onChange={(event) => {
                    setProductData((productData) => ({
                      ...productData,
                      p_image: event.target.value,
                    }));
                  }}
                  placeholder="https://example.com/image.jpg"
                  className={`w-full px-4 py-3 rounded-xl border ${error.p_image ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              {error.p_image && <p className="text-red-500">{error.p_image}</p>}
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Description
              </label>
              <textarea
                name="p_description"
                rows={4}
                value={productData.p_description}
                onChange={(event) => {
                  setProductData((productData) => ({
                    ...productData,
                    p_description: event.target.value,
                  }));
                }}
                placeholder="Describe the key features and specifications..."
                className={`w-full px-4 py-3 rounded-xl border ${error.p_description ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400`}
              ></textarea>
              {error.p_description && (
                <p className="text-red-500">{error.p_description}</p>
              )}
            </div>
          </div>

          {/* Form Footer / Action */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 focus:ring-4 focus:ring-indigo-200"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

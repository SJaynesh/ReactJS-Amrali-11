import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { toast } from "react-toastify";

export default function ViewProductPage() {
  const allProducts = useSelector(
    (state: RootState) => state.productReducer.allProducts,
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Product Inventory
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your store's listings, stock, and pricing.
            </p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm active:scale-95">
            + Export CSV
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    No
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Product Details
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Price
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allProducts.length > 0 ? (
                  allProducts.map((product, index) => (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={product.p_image}
                            alt={product.p_name}
                            className="w-12 h-12 rounded-lg object-cover bg-gray-100 border border-gray-100"
                          />
                          <div className="max-w-[200px]">
                            <div className="font-semibold text-gray-900 truncate">
                              {product.p_name}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {product.p_description}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900">
                        ${Number(product.p_price).toLocaleString()}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            product.p_stock > 10
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-orange-50 text-orange-700"
                          }`}
                        >
                          {product.p_stock} in stock
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm">
                        <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
                          {product.p_category}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => {
                              toast.success("Product Updated Successfully..");
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shadow-sm border border-transparent hover:border-blue-100"
                          >
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
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              toast.success("Product Deleted Successfully..");
                            }}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors shadow-sm border border-transparent hover:border-red-100"
                          >
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p className="text-center">No Products Found</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

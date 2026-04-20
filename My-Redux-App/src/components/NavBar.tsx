import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              SHOP<span className="text-gray-900">BOLD</span>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-indigo-600" : "text-gray-700"} hover:text-indigo-600 transition-colors duration-200`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-indigo-600" : "text-gray-700"} hover:text-indigo-600 transition-colors duration-200`
              }
            >
              Add Product
            </NavLink>

            <NavLink
              to="/view-product"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-indigo-600" : "text-gray-700"} hover:text-indigo-600 transition-colors duration-200`
              }
            >
              View Product
            </NavLink>

            <NavLink
              to="/counter-page"
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-indigo-600" : "text-gray-700"} hover:text-indigo-600 transition-colors duration-200`
              }
            >
              Inventory
            </NavLink>
          </div>

          {/* E-commerce Action Icons */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-500 hover:text-indigo-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <NavLink to="/cart" className="group relative p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                0
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

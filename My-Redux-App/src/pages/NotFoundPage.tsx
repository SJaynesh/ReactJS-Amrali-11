import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Large Decorative 404 */}
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or never existed in our shop.
        </p>
        {/* Visual Element: Stylized Box/Search Icon */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-200"
          >
            Goto Home
          </button>
        </div>
      </div>
    </div>
  );
}

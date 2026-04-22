import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import {
  increment,
  decrement,
  themeChange,
} from "../features/counter/couterSlice";

export default function CounterPage() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const theme = useSelector((state: RootState) => state.counterReducer.theme);
  const dispatch = useDispatch();

  // Dynamic classes based on Redux theme state
  const bgClass =
    theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white";
  const cardClass =
    theme === "light"
      ? "bg-white shadow-xl"
      : "bg-gray-800 border border-gray-700 shadow-2xl";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 flex items-center justify-center p-6 ${bgClass}`}
    >
      <div
        className={`max-w-md w-full rounded-3xl p-8 text-center transition-all ${cardClass}`}
      >
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">
            Inventory Control
          </h1>
          <h2 className="text-3xl font-extrabold">Product Stock</h2>
        </header>

        {/* Counter Display */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="text-8xl font-black tabular-nums tracking-tighter">
            {count}
          </div>
          <div className="absolute -bottom-2 text-xs font-medium uppercase opacity-50 tracking-widest">
            Units in Warehouse
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => dispatch(decrement())}
            className="flex items-center justify-center py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold text-2xl transition-transform active:scale-95"
          >
            －
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="flex items-center justify-center py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-2xl transition-transform active:scale-95"
          >
            ＋
          </button>
        </div>

        {/* Theme Toggle Wrapper */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => dispatch(themeChange())}
            className="group flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-500 transition-all font-medium"
          >
            {theme === "light" ? (
              <>
                <span className="text-gray-600">Switch to Dark Mode</span>
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </>
            ) : (
              <>
                <span className="text-gray-300">Switch to Light Mode</span>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

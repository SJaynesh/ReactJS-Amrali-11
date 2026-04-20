import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import AddProductPage from "./pages/AddProductPage.tsx";
import CounterPage from "./pages/CounterPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ViewProductPage from "./pages/ViewProductPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "add-product",
        Component: AddProductPage,
      },
      {
        path: "view-product",
        Component: ViewProductPage, 
      },
      {
        path: "counter-page",
        Component: CounterPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);

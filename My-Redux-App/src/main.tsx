import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import CounterPage from './pages/CounterPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "about",
        Component: AboutPage
      },
      {
        path: "counter-page",
        Component: CounterPage
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

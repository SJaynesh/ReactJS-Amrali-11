import { Provider } from "react-redux";
import { store } from "./app/store";
import { Link, Outlet } from "react-router";

function App() {


  return <>
    <Provider store={store}>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/counter-page">Counter</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

    </Provider>
  </>
}

export default App;
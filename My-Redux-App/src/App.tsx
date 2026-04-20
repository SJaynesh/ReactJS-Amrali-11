import { Provider } from "react-redux";
import { store } from "./app/store";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />

        <Outlet />

        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;

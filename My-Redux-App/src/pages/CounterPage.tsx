import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { increment, decrement, themeChange } from "../features/counter/couterSlice";


export default function CounterPage() {
    const count = useSelector((state: RootState) => state.count); // only for get/fetch state 
    const theme = useSelector((state: RootState) => state.theme);

    const dispatch = useDispatch(); // only for access Action 
    return (
        <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
            <center>
                <h1>My Redux App</h1>

                <h2>Count : {count}</h2>

                <div>
                    <button onClick={() => dispatch(increment())}>Increment (+)</button>
                    <button onClick={() => dispatch(decrement())}>Decrement (-)</button>

                    <button onClick={() => dispatch(themeChange())}>Theme Change</button>
                </div>
            </center >
        </div >
    )
}

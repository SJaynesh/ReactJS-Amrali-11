import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
        theme: "light"
    },
    reducers: {
        // Actions
        increment: (state) => {
            state.count += 1;
            // 0 + 1 = 1
        },
        decrement: (state) => {
            if (state.count > 1) { // 7 > 1
                state.count -= 1;
            }
        },
        themeChange: (state) => {
            if (state.theme === 'light') {
                state.theme = 'dark';
            } else {
                state.theme = 'light';
            }
        }
    }
});

export const { increment, decrement, themeChange } = counterSlice.actions;
export default counterSlice.reducer;

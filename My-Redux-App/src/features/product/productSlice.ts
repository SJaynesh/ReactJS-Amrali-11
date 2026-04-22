import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  allProducts: any[];
}

// interface studentType {
//   name: string;
//   age: number;
//   std: number;
//   class: string;
//   marks: number;
//   isMarried: boolean;
// }

// const student: studentType = {
//   name: "Aman",
//   age: 15,
//   std: 10,
//   class: "A",
//   marks: 89.63,
//   isMarried: false,
// };

const fetchAllProducts = () => {
  const allData = JSON.parse(localStorage.getItem("products") || "[]");

  console.log("All Products Data : ", allData);

  return allData;
};

const initialState: initialStateType =  {
  allProducts: fetchAllProducts(),
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    // Actions
    addProduct: (state, action) => {
      console.log("Payload : ", action.payload);

      state.allProducts.push(action.payload);

      localStorage.setItem("products", JSON.stringify(state.allProducts));
    },

    deleteProduct: (state, action) => {},

    updateProduct: (state, action) => {},
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;

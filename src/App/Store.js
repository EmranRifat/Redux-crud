import { configureStore } from "@reduxjs/toolkit";
import  booksSlice  from "../Componands/BookSlice";

const store=configureStore({
reducer:{
    booksReducer:booksSlice,
}
})
export default store;
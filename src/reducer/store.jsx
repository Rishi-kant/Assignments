
import { configureStore } from "@reduxjs/toolkit";

import alphabetReducer from "./buttonSlice";

export const store =configureStore({
    reducer:{
        alphabet: alphabetReducer,
    }
})
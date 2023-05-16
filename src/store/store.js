import { combineReducers, configureStore } from "@reduxjs/toolkit"
import PagesSlice from "./pages/PagesSlice"

const rootReducer = combineReducers({
    pages: PagesSlice 
  })
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
import { configureStore } from "@reduxjs/toolkit";
import { BooksQuery } from "../query-rtk/querySlice";

const store = configureStore({
  reducer: {
    [BooksQuery.reducerPath]: BooksQuery.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(BooksQuery.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

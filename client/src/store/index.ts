import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { assetsApi } from "./api/assetsApi";
import { useFetchAssetsQuery } from "./api/assetsApi";

export const store = configureStore({
    reducer: { [assetsApi.reducerPath]: assetsApi.reducer },
    middleware: (getDefaultMiddleware) => { return getDefaultMiddleware().concat(assetsApi.middleware) }
});

setupListeners(store.dispatch);


export { useFetchAssetsQuery }

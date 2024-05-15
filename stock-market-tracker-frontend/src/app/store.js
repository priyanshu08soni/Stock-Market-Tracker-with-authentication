import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from "../features/user/userSlice";
import watchlistReducer from "../features/watchlist/watchListSlice"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    watchlist:watchlistReducer,
  },
});

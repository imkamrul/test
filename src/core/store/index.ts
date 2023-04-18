import { counterSlice } from "@/core/store/slices/count.slice";
import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "./slices/common.slice";
import { planSlice } from "./slices/myPlan.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    common: commonSlice.reducer,
    plan: planSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

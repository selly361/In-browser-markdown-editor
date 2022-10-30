import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import documentReducer from "features/documentSlice"
import helperReducer from "features/helperSlice"

export const store = configureStore({
  reducer: {
    helper: helperReducer,
    document: documentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

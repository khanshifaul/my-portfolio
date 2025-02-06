// lib/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import navigationReducer from "./features/navigation/navigationSlice";
import projectReducer from "./features/project/projectSlice";
const rootReducer = combineReducers({
  navigation: navigationReducer,
  project: projectReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

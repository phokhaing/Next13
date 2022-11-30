// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import theme from "./service/theme/themeService";

// const combinedReducer = combineReducers({
//   theme,
// });

// const rootReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer: rootReducer,
//   });

// export const wrapper = createWrapper(makeStore, {
//   debug: true,
//   serializeState: (state) => JSON.stringify(state),
//   deserializeState: (state) => JSON.parse(state),
// });



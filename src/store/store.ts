import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import countries from './reducers/countries';
import countryDetails from './reducers/countryDetails';

const reducer = combineReducers({
  countries,
  countryDetails,
});

// creating store
export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

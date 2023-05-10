import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';

const mainReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  mainReducer,
});

export default store;

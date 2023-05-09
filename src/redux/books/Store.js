import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BookSlice';
import categoriesReducer from './categories/CategoriesSlice';

const mainReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  mainReducer,
});

export default store;

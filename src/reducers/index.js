import React from "react";
import { combineReducers } from "redux";
import BookReducer from "./ServiceData_reducer";
import SelectedBook from "./action_reducer";
import AddPost from "./reducer_PostAction";
import ShowEdit from "./reducer_showEdit";

const bookReducer = combineReducers({
  books: BookReducer,
  bookList: SelectedBook,
  addPost: AddPost,
  showEdit: ShowEdit
});
export default bookReducer;

import React from "react";
import { combineReducers } from "redux";
import BookReducer from "./ServiceData_reducer";
// import DeletePost from "./reducer_DeleteAction";
import SelectedBook from "./action_reducer";
import AddPost from "./reducer_PostAction";
import ShowEdit from "./reducer_showEdit";
import ViewDetails from "./reducer_viewDetails";

const bookReducer = combineReducers({
  books: BookReducer,
  bookList: SelectedBook,
  addPost: AddPost,
  showEdit: ShowEdit,
  viewDetails: ViewDetails
  // deletePost: DeletePost
});
export default bookReducer;

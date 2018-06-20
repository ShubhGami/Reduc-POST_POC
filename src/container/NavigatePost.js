import React, { Component } from "react";
import { connect } from "react-redux";
import { showEditPost } from "../action/index";
import { bindActionCreators } from "redux";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import PostDetails from "./PostDetails";

class PostNavigation extends React.Component {
  render() {
    console.log("viewDetails ----> ", this.props.viewDetails);
    console.log("showEdit ----> ", this.props.showEdit);
    console.log("booklist ----> ", this.props.addPost.post.length);

    // if (this.props.showEdit && this.props.viewDetails === false) {
    if (this.props.showEdit && this.props.addPost.post.length > 0) {
      return (
        <div>
          <AddPost />
        </div>
      );
    } else {
      if (this.props.viewDetails === false) {
        console.log("navigation else postdetails ");
        return <PostDetails />;
      } else {
        console.log("navigation else edit ");
        return <EditPost />;
      }
    }
  }
}
function mapToState(state) {
  return {
    // books: state.books
    showEdit: state.showEdit,
    viewDetails: state.viewDetails,
    addPost: state.addPost
  };
}
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ showEditPost1: showEditPost }, dispatch);
}
export default connect(mapToState, mapDispatchtoProps)(PostNavigation);

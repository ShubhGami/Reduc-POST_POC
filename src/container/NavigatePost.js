import React, { Component } from "react";
import { connect } from "react-redux";
import { showEditPost } from "../action/index";
import { bindActionCreators } from "redux";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

class PostNavigation extends React.Component {
  render() {
    if (this.props.showEdit) {
      return (
        <div>
          <AddPost />
        </div>
      );
    } else {
      return <EditPost />;
    }
  }
}
function mapToState(state) {
  return {
    // books: state.books
    showEdit: state.showEdit
  };
}
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ showEditPost1: showEditPost }, dispatch);
}
export default connect(mapToState, mapDispatchtoProps)(PostNavigation);

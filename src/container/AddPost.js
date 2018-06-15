import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../action/index";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditPost from "./EditPost";
import { showEditPost } from "../action";
import PostDetails from "./PostDetails";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddPostData: true,
      postDetailsData: false
    };
    this.AddPostCliclk = this.AddPostCliclk.bind(this);
  }
  AddPostCliclk() {
    return this.props.showEditPost(this.state.showAddPostData);
  }
  PostListView() {
    console.log("Addpost compoent", this.props.addPost.post);
    return this.props.addPost.post.map(post => {
      return (
        <Link to="/postdetails">
          {" "}
          <div
            onClick={() => this.props.selectPosts(post, true)}
            key={post.titleValue}
            className="postData"
          >
            <p className="postTitle">{post.titleValue}</p>
            <p className="postCategory">{post.categories}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    // console.log(this.PostListView());
    // console.log(this.state.showAddPostData);

    return (
      <div>
        <div className="AddPostData">
          <Link to="/editPost">
            <button
              onClick={this.AddPostCliclk}
              name="AddPost"
              style={{ float: "right" }}
              className="btn btn-success addPostButton"
            >
              ADD POST
            </button>
          </Link>
          {this.consoleMethod}
        </div>

        <div>{this.PostListView()}</div>
      </div>
    );
  }
}

function mapToState(state) {
  return {
    // books: state.books
    addPost: state.addPost,
    showEdit: state.showEdit
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(
    { selectPosts: showPost, showEditPost: showEditPost },
    dispatch
  );
}

export default connect(mapToState, mapDispatchtoProps)(AddPost);

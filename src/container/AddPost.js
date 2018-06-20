import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../action/index";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditPost from "./EditPost";
import { showEditPost } from "../action";
import PostDetails from "./PostDetails";
import { showDetails, viewDetails } from "../action";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddPostData: true,
      postDetailsData: false
    };
    // this.AddPostCliclk = this.AddPostCliclk.bind(this);
    // this.PostDetailsFlag = this.PostDetailsFlag.bind(this);
  }

  PostDetailsFlag(post) {
    // this.setState({ postDetailsData: true });
    // return this.props.selectPosts(post, this.state.postDetailsData);

    this.props.showDetails(false);
    this.props.selectPosts(post, true);
    this.props.showEditPost(false);
  }

  AddPostCliclk() {
    console.log("AddPostclik");
    this.props.showEditPost(false);
    this.props.showDetails(true);
  }
  PostListView() {
    // console.log("Addpost compoent", this.props.addPost.post);
    return this.props.addPost.post.map(post => {
      return (
        <div
          // onClick={() => this.props.selectPosts(post, true)}
          onClick={() => this.PostDetailsFlag(post)}
          key={post.titleValue}
          className="postData"
        >
          <p className="postTitle">{post.titleValue}</p>
          <p className="postCategory">{post.categories}</p>
        </div>
      );
    });
  }

  render() {
    // console.log("new action: -", this.props.showDetails);
    // console.log(this.PostListView());
    // console.log(this.state.showAddPostData);
    console.log("Addpost bookList value: ", this.props.bookList);
    console.log("View bookList value: ", this.props.viewDetails);
    if (this.state.postDetailsData === false) {
      // console.log("status of state ", this.state.postDetailsData);
      return (
        <div>
          <div className="AddPostData">
            <button
              onClick={() => this.AddPostCliclk()}
              name="AddPost"
              style={{ float: "right" }}
              className="btn btn-success addPostButton"
            >
              ADD POST
            </button>

            {this.consoleMethod}
          </div>

          <div>{this.PostListView()}</div>
        </div>
      );
    } else {
      return <div>Test1</div>;
    }
  }
}

function mapToState(state) {
  return {
    // books: state.books
    addPost: state.addPost,
    showEdit: state.showEdit,
    bookList: state.bookList,
    viewDetails: state.viewDetails
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(
    {
      selectPosts: showPost,
      showEditPost: showEditPost,
      showDetails: showDetails
      // viewDetails: viewDetails
    },
    dispatch
  );
}

export default connect(mapToState, mapDispatchtoProps)(AddPost);

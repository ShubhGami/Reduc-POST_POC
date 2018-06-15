import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../action/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PostDetails extends React.Component {
  render() {
    if (!this.props.bookList) {
      // console.log(this.props.bookList);
      return <div />;
    } else if (this.props.bookList) {
      // console.log(this.props.bookList);
      // console.log("=========", this.props);
      console.log("bookList :", this.props.bookList);
      // if (this.props.isAuthed) {
      // if (this.props.bookList.flag) {
      return (
        <div className="PostDetailsWrapper">
          <br /> <br />
          <Link to="/">
            <button
              name="BackToPost"
              style={{ float: "left" }}
              className="btn backPostButton"
            >
              &#8826; Back to Posts
            </button>
          </Link>
          <Link to="/">
            <button
              name="AddPost"
              style={{ float: "right" }}
              className="btn btn-success deletePostButton"
            >
              DELETE POST
            </button>
          </Link>
          <p>Title:- {this.props.bookList.post.titleValue}</p>
          <p>Categories:- {this.props.bookList.post.categories}</p>
          {/*<div>
          <h4>{this.props.postData.title}</h4>
        </div>*/}
          <p>Content :- {this.props.bookList.post.content}</p>
          <div />
        </div>
      );
      // } else {
      //   return <div>Hello</div>;
      // }
      // }
      //  else {
      //   return <div />;
      // }
    }
  }
}
function mapStateToProps(state) {
  return {
    bookList: state.bookList
  };
}
export default connect(mapStateToProps)(PostDetails);

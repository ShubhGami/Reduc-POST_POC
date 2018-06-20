import React, { Component } from "react";
import { connect } from "react-redux";
import { showPost } from "../action/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { showEditPost } from "../action";
import { bindActionCreators } from "redux";

class PostDetails extends React.Component {
  render() {
    console.log("out when nothing in booklist ", this.props.viewDetails);
    if (this.props.viewDetails) {
      console.log("when nothing in booklist ", this.props.bookList);
      return <div />;
    } else if (!this.props.viewDetails && this.props.bookList) {
      // console.log(this.props.bookList);
      // console.log("=========", this.props);
      console.log("bookList :", this.props.bookList);
      // console.log("bookList post :", this.props.bookList.post);
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
              onClick={() => this.props.showEditPost(true)}
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
    } else {
      return <div>test</div>;
    }
  }
}
function mapStateToProps(state) {
  return {
    bookList: state.bookList,
    viewDetails: state.viewDetails
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showEditPost: showEditPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

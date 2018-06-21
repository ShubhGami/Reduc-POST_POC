import React from "react";
import Component from "react";
import "../css/index.css";
import { connect } from "react-redux";
import { addPost } from "../action/index";
import { bindActionCreators } from "redux";
import { showEditPost } from "../action";
// import DumpData from "./DumpData";
import { Link } from "react-router-dom";

const savePost = [];
class EditDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      categories: "",
      content: "",
      savedPost: [],
      addPost: []
    };
    this.setTitleValue = this.setTitleValue.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }
  setTitleValue(e) {
    this.setState({
      titleValue: e.target.value
    });

    // console.log(this.state.titleValue);
  }

  saveDetails() {
    this.props.addPost({
      titleValue: this.state.titleValue,
      categories: this.state.categories,
      content: this.state.content
    });
    // this.props.showEditPost(false);
    this.props.showEditPost(true);
  }

  // saveDetails1() {
  //   savePost.push(this.state.titleValue);
  //   savePost.push(this.state.categories);
  //   savePost.push(this.state.content);
  //   // console.log(JSON.stringify(savePost));
  //   this.setState({
  //     savedPost: savePost,
  //     addPost: this.props.postList
  //   });
  //   // console.log("55555555555", savePost);
  //   const data = this.props.postList;
  //   this.state.addPost["title"] = "newvalue";
  //   savePost["title"] = 3;
  //   // data["title"] = "new dtaat";
  // }

  render() {
    // console.log(this.props.postList);
    // console.log(this.state.savedPost);
    // console.log("@@@@@", data);
    const itemList = this.state.savedPost.map(item => <h4>{item}</h4>);
    // console.log(this.props.postList);
    return (
      <div className="editDetailsWrapper">
        <form>
          <div class="form-group">
            <label for="title">
              <h5>Title: </h5>
            </label>
            <input
              onChange={this.setTitleValue}
              type="text"
              className="form-control"
              id="title"
              value={this.state.titleValue}
            />
          </div>
          <div class="form-group">
            <label for="usr">
              <h5>Categories:</h5>
            </label>
            <input
              onChange={event =>
                this.setState({
                  categories: event.target.value
                })
              }
              type="text"
              class="form-control"
              id="categories"
              value={this.state.categories}
            />
          </div>
          <div className="form-group">
            <label for="comment">
              <h5>Contents:</h5>
            </label>
            <textarea
              onChange={event =>
                this.setState({
                  content: event.target.value
                })
              }
              className="form-control"
              rows="7"
              id="content"
            />
          </div>

          <div className="formButtons">
            <Link to="/">
              <button
                onClick={this.saveDetails}
                name="saveButton"
                className="btn btn-success"
                type="button"
              >
                Save
              </button>
            </Link>
            <Link to="/">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => this.props.showEditPost(true)}
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
function mapStatetoProp(state) {
  return {
    postList: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addPost: addPost, showEditPost: showEditPost },
    dispatch
  );
}
export default connect(mapStatetoProp, mapDispatchToProps)(EditDetails);

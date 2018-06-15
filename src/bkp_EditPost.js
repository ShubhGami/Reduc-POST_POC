import React from "react";
import Component from "react";
import "./css/index.css";

class EditDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      categories: "",
      content: ""
    };
    this.setTitleValue = this.setTitleValue.bind(this);
  }
  setTitleValue(e) {
    this.setState({
      titleValue: e.target.value
    });
    // console.log(this.state.titleValue);
  }
  render() {
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
            {this.state.titleValue}
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
            {this.state.categories}{" "}
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
          {this.state.content}
          <div className="formButtons">
            <button className="btn btn-success" type="button">
              Save
            </button>
            <button className="btn btn-danger" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default EditDetails;

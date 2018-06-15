import React from "react";
import Component from "react";
// import { render } from "react-dom";
import EditDetails from "../container/EditPost";
import PostDetails from "../container/PostDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from "../container/AddPost";

class App extends React.Component {
  render() {
    return (
      <div>
        <AddPost />
      </div>
    );
  }
}
export default App;

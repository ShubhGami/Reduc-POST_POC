import React from "react";
import Component from "react";
// import { render } from "react-dom";
import EditDetails from "../container/EditPost";
import PostDetails from "../container/PostDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from "../container/AddPost";
import Navigation from "../container/NavigatePost";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
export default App;

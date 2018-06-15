import React from "react";
import { render } from "react-dom";
// import EditDetails from "./EditPost";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/app";
import reducers from "./reducers";
// import { browserHistory } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import EditPost from "./container/EditPost";
import PostDetails from "./container/PostDetails";
// import AddPost from "./container/AddPost";

import "bootstrap/dist/css/bootstrap.min.css";
const abc = "sdfsdf";
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/editPost" component={EditPost} />
        <Route path="/postdetails" component={PostDetails} />
        )} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".root")
);
// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

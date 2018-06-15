import React, { Component } from "react";

class Dump extends React.Component {
  render() {
    // console.log( this.props.countries);
    const iterator = this.props.countries.map(item => (
      <li>
        <h4>{item}</h4>
      </li>
    ));
    return (
      <div className="list">
        <h3>You have selected following Countries :</h3>
        <ol>{iterator}</ol>
      </div>
    );
  }
}
export default Dump;

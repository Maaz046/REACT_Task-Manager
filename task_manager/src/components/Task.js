import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Task extends Component {
  state = {
    detailDropDown: true
  };

  clickFunc() {
    this.setState({ detailDropDown: !this.state.detailDropDown });
    console.log("Detail dd status is " + this.state.detailDropDown);
  }

  delFunc = (id, dispatch) => {
    //Since we extracted the dispatch function from the Context tag below, we can now call the dispatch function
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  render() {
    const { id, title, location, detail, date } = this.props;
    const { detailDropDown } = this.state;

    return (
      <Consumer>
        {/* Render something based on context value */}
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <div className="container">
                <h4>
                  {/* Within the render method if another method located in the classs is to be called, 'this'.'method name' 
                is used to refer to it */}
                  {title}
                  <i
                    className="fa fa-caret-down"
                    style={{ cursor: "pointer" }}
                    onClick={this.clickFunc.bind(this)}
                  />
                  <i
                    className="fa fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.delFunc.bind(this, id, dispatch)}
                  ></i>
                </h4>
                {detailDropDown ? (
                  <ul className="list-group">
                    <li className="list-group-item">{location}</li>
                    <li className="list-group-item">{detail}</li>
                    <li className="list-group-item">{date}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Task;

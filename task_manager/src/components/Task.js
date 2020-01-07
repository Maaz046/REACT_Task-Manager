import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
import axios from "axios";

class Task extends Component {
  state = {
    detailDropDown: true
  };

  clickFunc() {
    this.setState({ detailDropDown: !this.state.detailDropDown });
    console.log("Detail dd status is " + this.state.detailDropDown);
  }

  delFunc = async (id, dispatch) => {
    try {
      //Initially we just had the dispactch statement here which only deleted from the DOM and not the
      //Back end. Now using axios delete
      await axios.delete(
        `http://my-json-server.typicode.com/Maaz046/REACT_Task-Manager/tasks/${id}`
      );
      dispatch({ type: "DELETE_TASK", payload: id });
      //Since we extracted the dispatch function from the Context tag below, we can now call the dispatch function
      // .then(result => dispatch({ type: "DELETE_TASK", payload: id }));
    } catch (e) {
      dispatch({ type: "DELETE_TASK", payload: id });
    }
    //If a new task is added and you try to delete it, it wouldn't be deleted because the new task is added to the DOM only
    //and not the JSON placehilder DB. Remember, JSOB DB is a fake one where once created, cannot be changed by adding or
    //deleting tasks. So this try and catch block is inserted: On try an error is produced as axios cannot find a task with that
    //id in the fake DB hence, in catch we only fire a non axios dispatch to make changes in the DOM.
    //In a normal App with real DB you wouldn't need to do this
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

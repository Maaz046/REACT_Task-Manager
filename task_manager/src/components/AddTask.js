import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "./layout/TextInputGroup";
import uuid from "uuid";

class AddTask extends Component {
  state = {
    id: "",
    title: "",
    location: "",
    detail: "",
    date: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: [e.target.value] });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { title, location, detail, date } = this.state;

    if (title === "") {
      this.setState({ errors: { title: "Title is required" } });
      return; //If there is an error, the onSubmit function will end here without submitting
    }

    if (date === "") {
      this.setState({ errors: { date: "Date is required" } });
      return;
    }

    const newTask = {
      id: uuid(),
      title,
      location,
      detail,
      date
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    this.setState({
      title: "",
      location: "",
      detail: "",
      date: "",
      errors: {} //Ensures errors are cleareed on submit
    });

    // push allows for redirection
    this.props.history.push("/");
  };

  render() {
    const { title, location, detail, date, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Task</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Title"
                    name="title"
                    placeholder="Enter task"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                  <TextInputGroup
                    label="Location"
                    name="location"
                    placeholder="Enter task"
                    value={location}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Detail"
                    name="detail"
                    placeholder="Enter Details.."
                    value={detail}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />

                  {/* <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Enter task..."
                      value={title}
                      onChange={this.onChange}
                    />
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Location..."
                      value={location}
                      onChange={this.onChange}
                    />
                    <label htmlFor="detail">Detail</label>
                    <input
                      type="text"
                      name="detail"
                      className="form-control"
                      placeholder="Details..."
                      value={detail}
                      onChange={this.onChange}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                      type="text"
                      name="date"
                      className="form-control"
                      placeholder="Date..."
                      value={date}
                      onChange={this.onChange}
                    /> */}
                  <input type="submit" value="Add Task" className="btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTask;

import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "./layout/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class EditTask extends Component {
  state = {
    id: "",
    title: "",
    location: "",
    detail: "",
    date: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(
      `http://my-json-server.typicode.com/Maaz046/REACT_Task-Manager/tasks/${id}`
    );
    const task = response.data;
    this.setState({
      title: task.title,
      location: task.location,
      detail: task.detail,
      date: task.date
    });
  }

  onChange = e => this.setState({ [e.target.name]: [e.target.value] });

  onSubmit = async (dispatch, e) => {
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
              <div className="card-header">Edit Task</div>
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

                  <input type="submit" value="Update" className="btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditTask;

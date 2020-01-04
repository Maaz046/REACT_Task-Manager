import React, { Component } from "react";
import Task from "./Task";
import { Consumer } from "../context";

class Tasks extends Component {
  render() {
    return (
      <Consumer>
        {/* This value comes from the context provider in contex.js i.e <Provider value='the stuff you want to be accessed (in our case the entire state)>  */}
        {value => {
          const { tasks } = value;
          return (
            <div>
              <h1 className="display-4 mb-2">
                {/* Using span the text inside can be styled */}
                <span className="text-danger">Contact List</span>
              </h1>
              {tasks.map(task => (
                // Without the key, a warning is shown saying that each child should have a unique identifier
                <Task
                  id={task.id}
                  title={task.title}
                  location={task.location}
                  detail={task.detail}
                  date={task.date}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Tasks;

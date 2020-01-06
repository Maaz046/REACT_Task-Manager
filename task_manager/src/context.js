import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

//A reducer manipulates the page in accordance with the actions that it gets
//Action object will be submitted as an argument to the reducer function.
//This helps us determine what type of action is it, delete, add etc..
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
        // payload is just some data we want to send along with our action object (in this case the task id)
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    default:
      return state;
  }
};

//This is where our state will be held for global scope
//Since Provider extends component, we can use lifecycle methods inside it. SO instead of hardcoding the state
//we will fetch data from the fake JSON API server
export class Provider extends Component {
  state = {
    tasks: [],
    // tasks: [
    //   {
    //     id: 1,
    //     title: "Give Interview",
    //     location: "London",
    //     detail: "Kubrik consultants",
    //     date: "2/5/2019"
    //   },
    //   {
    //     id: 2,
    //     title: "Do laundry",
    //     location: "Laundromat across the road",
    //     detail: "Price increased to $5",
    //     date: "25/12/2019"
    //   },
    //   {
    //     id: 3,
    //     title: "Complete React Course",
    //     location: "Home",
    //     detail: "Traversy media course",
    //     date: "31/12/2019"
    //   }
    // ],

    //Needed to call the action
    dispatch: action => this.setState(state => reducer(state, action))
  };

  //Going to use 'axios' rather than 'fetch' for Getting data
  componentDidMount() {
    axios
      .get(
        "http://my-json-server.typicode.com/Maaz046/REACT_Task-Manager/tasks"
      )
      .then(response => this.setState({ tasks: response.data }));
  }

  render() {
    return (
      //'value' is whatever we want to be available to our application
      //Provider wraps around everything in the main application component i.e App.js
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//Consumer is used by any component that wants to access the state provided by the 'Provider' above
export const Consumer = Context.Consumer;

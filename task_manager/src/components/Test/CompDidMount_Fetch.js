import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    id: "",
    location: "",
    date: "",
    id: ""
  };

  componentDidMount() {
    //We can send a GET request through fetch or axios. Here we do a fetch but in context.js we'll use axios
    fetch(
      "http://my-json-server.typicode.com/Maaz046/REACT_Task-Manager/tasks/1"
    )
      .then(response => response.json()) //The response from the link is mapped to json
      .then(data =>
        this.setState({
          title: data.title,
          location: data.location,
          detail: data.detail,
          date: data.date,
          id: data.id
        })
      );
    console.log(this.state.location);
    //THe mapped response is logged onto the console
  }

  render() {
    const { title, location, date, id } = this.state;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h1>{location}</h1>
        <h1>{date}</h1>
      </div>
    );
  }
}

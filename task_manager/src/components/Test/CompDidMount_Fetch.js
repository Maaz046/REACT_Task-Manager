import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: "",
    id: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json()) //The response from the link is mapped to json
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body,
          id: data.id
        })
      );
    console.log(this.state.body);
    //THe mapped response is logged onto the console
  }

  render() {
    const { title, body, id } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{body}</h1>
        <h1>{id}</h1>
      </div>
    );
  }
}

import React, { Component } from "react";

//Render is a lifecycle method of a component. There are others as well
//Note that lifecyle methods are only available for class based components. If you do enter rfc tab you'll only have the return lethod but if you hit
//rcc tab you'll get back the render method (which is a lifecycle method). More can be added

export default class Test extends Component {
  state = {
    test: "testing, attention please.."
  };

  //This is also a Lifecycle method which will fire as soon as the component mounts
  //Its the secoond most used LCM as its used to make http calls to API/Backend etc..
  componentDidMount() {
    console.log("ComponentDidMount...");
  }

  //   Runs before component mounts
  componentWillMount() {
    console.log("ComponentWillMount...");
  }

  //Runs when component updates (change in its state or props)
  componentDidUpdate() {
    console.log("ComponentDidUpdate...");
  }

  componentWillUpdate() {
    console.log("ComponentWillUpdate...");
  }

  //When component receives new properties this is run
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //You must return something
    return {
      test: "eminem lyrics"
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Test Component</h1>
        <h1>{this.state.test}</h1>
      </div>
    );
  }
}

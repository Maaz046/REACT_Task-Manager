import React from "react";
import Tasks from "./components/Tasks";
//BrowserRouter is the parent component holding all routes, it is given the alias of Router.
//Route holds all routes and Switch allows us to hold a default not found page etc
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./components/AddTask";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          {/* Header is a functional component and it has been passed a prop i.e "title". The prop value is processed in the Header.js class which created a navbar 
        and display the title value as the page header. */}
          <Header title="Task Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Tasks} />
              <Route exact path="/about" component={About} />
              <Route exact path="/task/add" component={AddTask} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

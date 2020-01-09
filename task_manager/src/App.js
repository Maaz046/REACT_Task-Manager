import React from "react";
import Tasks from "./components/Tasks";
//BrowserRouter is the parent component holding all routes, it is given the alias of Router.
//Route holds all routes and Switch allows us to hold a default not found page etc
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./components/AddTask";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
// import Test from "./components/Test/Test";
import CompDidMount_Fetch from "./components/Test/CompDidMount_Fetch";
import EditTask from "./components/EditTask";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";

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
              {/* <Route exact path="/test" component={Test} /> */}
              <Route exact path="/test" component={CompDidMount_Fetch} />
              <Route exact path="/contact/edit/:id" component={EditTask} />
              {/* As long as component name is NotFound, the path doesn't need to be defined as a default is already associaed with this name 
                  Make sure to put the NotFound Route at the end since Routes are looked up sequentially and all others beneath it will be ignored*/}
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

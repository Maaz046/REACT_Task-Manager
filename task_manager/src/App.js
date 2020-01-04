import React from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        {/* Header is a functional component and it has been passed a prop i.e "title". The prop value is processed in the Header.js class which created a navbar 
        and display the title value as the page header. */}
        <Header title="Task Manager" />
        <AddTask />
        <div className="container">
          <Tasks />
        </div>
      </div>
    </Provider>
  );
}

export default App;

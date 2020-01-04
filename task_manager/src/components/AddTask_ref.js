import React, { Component } from "react";

//Note in this class the forms are modifying the props and not the state, the state doesn't even exist. This is an uncontrolled component change
class AddTask extends Component {
  constructor(props) {
    super(props);
    //4 different variables assigned different Refs for each field.
    //Refs are used to access an html element without the use of 'getelementbyid'
    this.titleInput = React.createRef();
    this.locationInput = React.createRef();
    this.detailInput = React.createRef();
    this.dateInput = React.createRef();
    //Now we have a ref attached to each field
  }

  //This function is asscociated with the submit button and
  onSubmit = e => {
    e.preventDefault();
    const task = {
      //task has now access to the refs which have the reqd I/P
      title: this.titleInput.current.value,
      location: this.locationInput.current.value,
      detail: this.detailInput.current.value,
      date: this.dateInput.current.value
    };

    console.log(task);
  };

  static defaultProps = {
    title: "Default title",
    location: "Default location",
    detail: "Default detail",
    date: "Default Date"
  };

  render() {
    const { title, location, detail, date } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Task</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter task..."
                value={title}
                //Refs are needed as an additional argument when making uncontrolled changes
                ref={this.nameInput}
              />
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="Location..."
                value={location}
                ref={this.locationInput}
              />
              <input
                type="text"
                name="detail"
                className="form-control"
                placeholder="Details..."
                value={detail}
                ref={this.detailInput}
              />
              <input
                type="text"
                name="date"
                className="form-control"
                placeholder="Date..."
                value={date}
                ref={this.dateInput}
              />
            </div>
            <input type="submit" value="Add Contact" className="btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;

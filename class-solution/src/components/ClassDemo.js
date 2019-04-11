import React, { Component } from "react";

class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      date: "",
      count: 0,
      data: []
    };
  }
  //**method in the class: similar to document.getElementById('id').value
  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //**method in class: similar to document.getElementById('id').value.innerHTML = 'this.state.description'
  addItemToData = e => {
    e.preventDefault();
    //deconstruct
    const { description, date } = this.state;
    const arr = {
      description,
      date
    };
    this.setState({
      data: [...this.state.data, arr],
      description: "",
      date: ""
    });
  };

  removelist = id => {
    this.setState({
      data: this.state.data.filter((d, index) => index !== id)
    });
  };
  render() {
    const list = this.state.data.map((item, i) => (
      <tr key={i}>
        <td>{item.description}</td>
        <td>{item.date}</td>
        <td>
          <button className="bg-primary" onClick={() => this.removelist(i)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="container" id="ObjectDemo-MainDiv">
        <h1 className="flex" id="todo-h1">
          Todo List
        </h1>
        <form className="form-todo" onSubmit={this.addItemToData}>
          <label>Description</label>
          <input
            type="text"
            className="flex"
            name="description"
            value={this.state.description}
            onChange={this.inputChange}
          />
          <label>Date</label>
          <input
            type="date"
            className="flex"
            name="date"
            value={this.state.date}
            onChange={this.inputChange}
          />
          <button className="bg-primary">Add List</button>
        </form>
        <table className="flex">
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}
export default ClassDemo;

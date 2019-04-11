import React, { Component } from "react";
{
  /**
  create a list car program where you add 5 cars: brand, type, model, year and put it into an array call data []
  Using the es5 state rule
  Use deconstructing
  Use the form input type for onSubmit()
  Create three functions in the class, inputChange for onChange handle, addCar() for onClick, 
  put it in a table and display it
*/
}

class Assignment extends Component {
  state = {
    brand: "",
    type: "",
    model: "",
    year: "",
    data: []
  };

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addCar = e => {
    e.preventDefault();
    const { brand, type, model, year } = this.state;
    const arr = {
      brand,
      type,
      model,
      year
    };
    this.setState({
      data: [...this.state.data, arr],
      brand: "",
      type: "",
      model: "",
      year: ""
    });
  };
  render() {
    const list = this.state.data.map((item, i) => (
      <tr key={i}>
        <td>{item.brand}</td>
        <td>{item.type}</td>
        <td>{item.model}</td>
        <td>{item.year}</td>
      </tr>
    ));
    return (
      <div className="container" id="ObjectDemo-MainDiv">
        <form className="form-todo" onSubmit={this.addCar}>
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={this.state.brand}
            onChange={this.inputChange}
          />
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.inputChange}
          />
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={this.inputChange}
          />
          <label>Year</label>
          <input
            type="year"
            name="year"
            value={this.state.year}
            onChange={this.inputChange}
          />
          <button className="bg-primary">Submit</button>
        </form>
        <table className="flex">
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}
export default Assignment;

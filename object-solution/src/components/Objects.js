import React, { Component } from "react";
class Objects extends Component {
  render() {
    //Creating a person object
    const person = {
      name: "Adam Smith",
      occupation: "writer",
      location: "Finland",
      age: 18,
      height: "157 cm",
      bmi: "normal"
    };
    //deconstruct the object
    const { name, occupation, location, bmi } = person;
    return (
      <div className="container" id="ObjectDemo-MainDiv">
        {/*Object starts here*/}
        <h1 className="flex">Calling out the object with deconstruction</h1>
        <p className="flex">I am {name}</p>
        <p className="flex">I am a {occupation}</p>
        <p className="flex">I live {location}</p>
        <p className="flex">My weight is {bmi}</p>
      </div>
    );
  }
}
export default Objects;

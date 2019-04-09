import React, { Component } from "react";
class ObjectDemo extends Component {
  render() {
    //Creating person object
    const person = {
      name: "John Smith",
      age: 18,
      location: "Finland",
      isDrinkingAge: false,
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    };

    // Change a property
    Object.defineProperty(person, "name", { value: "Kobe Bryant" });

    //Creating Skills array
    const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"];

    return (
      <div className="container" id="ObjectDemo-MainDiv">
        {/*Object starts here*/}
        <h1 className="flex">About {person.name}</h1>
        <p className="flex">I am {person.age} years old.</p>
        <p className="flex">I live in {person.location}.</p>
        <p className="flex">My skills are the following:</p>
        {person.isDrinkingAge ? (
          <p className="flex">I can drink</p>
        ) : (
          <p className="flex">I cannot drink yet</p>
        )}

        {/*Array starts here*/}
        <ul className="list-group list-group-horizontal flex" id="skills">
          {skills.map(skill => (
            <li className="list-group-item" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ObjectDemo;

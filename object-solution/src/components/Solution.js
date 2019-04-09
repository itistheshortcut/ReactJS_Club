import React, { Component } from "react";
class Solution extends Component {
  render() {
    {
      /** 1) Create a student object 
            keys: [firstName, lastName, class, gpa, class year, function fullName] 
            ***values: class is to be an array []
            ***function fullName returns "I am [first name of student] [last name of student] a [class year]"  
         3) Display in <h1>function fullName</h1>, 
         4) Display all classes in the array
    
    */
    }
    const student = {
      firstName: "Michael",
      lastName: "Jordan",
      isClassActive: false,
      classYear: "Sophmore",
      gpa: 4,
      fullName: function() {
        return `I am ${this.firstName} ${this.lastName} a ${this.classYear}`;
      }
    };
    const myclass = ["Java", "React", "JavaScript"];

    // Change a property es5
    Object.defineProperty(student, "classes", { value: myclass });
    console.log(student.class);
    return (
      <div className="container" id="ObjectDemo-MainDiv">
        {/*Object starts here*/}
        <h1 className="flex">{student.fullName()}</h1>
        <p className="flex">My current classes:</p>
        {student.isClassActive ? (
          <p className="flex">I have no class</p>
        ) : (
          <ul className="list-group list-group-horizontal flex" id="skills">
            {myclass.map(myclass => (
              <li className="list-group-item" key={myclass}>
                {myclass}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default Solution;

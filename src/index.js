import React from "react"
import ReactDOM from "react-dom"

function VacationStaysList(){
  return (
    <ol>
      <li>New Zealand</li>
      <li>Israel</li>
      <li>San Jose, CA</li>
    </ol>
  );
}

function Name(){
  return (
    <h1>
      Zel elbitapmoC
    </h1>
  );
}

function Introduction(){
  return (
    <div>
      <p>Howdy my name is:</p> <Name/>
      <aside>A Quick Intro</aside>
      <h2>I'm really glad to be here, my main goal is to work on Charisma and leveling up :)</h2>
      <h3>A separate goal is to eventually travel to:</h3>
      <VacationStaysList/>
    </div>
  );
}

ReactDOM.render(
  <Introduction/>,
  document.getElementById("root")
);
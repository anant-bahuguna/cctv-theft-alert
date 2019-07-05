console.log(process.env.NODE_ENV);

var databaseURL = "https://www.coding.com/production";

if (process.env.NODE_ENV === "development") {
  databaseURL = "https://www.coding.com/development";
}
console.log(databaseURL);

// const friends = [1,2,3,4]

// console.log(friends)

// var foo=(x) => {console.log(x)}

// foo('hello')

// import React from "react";
// import ReactDOM from "react-dom";

// const App = () => <h1>Coding</h1>;
// ReactDOM.render(<App />, document.getElementById("root"));

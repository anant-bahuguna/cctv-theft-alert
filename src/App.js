import React from "react";
import "materialize-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cctv from './components/Cctv'
import Login from "./pages/Login";


function App() {
  return (
    <Router>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/cctv/:userName' component={Cctv} />
    </div>
  </Router>
  );
}

export default App;

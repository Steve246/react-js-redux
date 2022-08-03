import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import StudentView from "./feature/student/StudentView";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <StudentView />
      </div>
    );
  }
}

export default App;

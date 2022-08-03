import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import StudentView from "./feature/student/StudentView";
import StudentBookPage from "./feature/studentBook/StudentBookPage";
import StudentBookView from "./feature/studentBook/StudentBookView";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <StudentView />
        <StudentBookPage view={StudentBookView} />
      </div>
    );
  }
}

export default App;

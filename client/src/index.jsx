import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: "value of state"
    };
  }

  render() {
    return <div>Hello! Does this work?</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
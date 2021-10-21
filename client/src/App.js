import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
    <div>
      <h1>What's in your fridge?</h1>
      <p className="App-intro">{this.state.apiResponse}</p>
    </div>
    
    )
  }
}

export default App;
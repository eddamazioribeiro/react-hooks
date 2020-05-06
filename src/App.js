import React, { Component, useState } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const clearCount = () => {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h2>Counter App</h2>
//       <button onClick={increment}>Clicked {count} times</button>
//       <button onClick={clearCount}>Clear counter</button>
//     </div>
//   );  
// }

class App extends Component{
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  clearCount = () => {
    this.setState({
      count: 0
    })  
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }; 

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }; 

  render () {
    return (
      <div>
        <h2>Counter App</h2>
        <button onClick={this.increment}>Clicked {this.state.count} times</button>
        <button onClick={this.clearCount}>Clear counter</button>
      </div>
    );
  };
}

export default App;

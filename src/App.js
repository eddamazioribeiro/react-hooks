import React, { Component, useState, useEffect } from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    fetch('https://hn.algolia.com/api/v1/search?query=react')
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  });

  return(
    <div>
      <h2>News</h2>
      {news.map((n, i) => (
        <p key={i}>
          {n.title}
        </p>
      ))}
    </div>
  );
}

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   });

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

// class App extends Component{
//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   };

//   clearCount = () => {
//     this.setState({
//       count: 0
//     })  
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }; 

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }; 

//   render () {
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>Clicked {this.state.count} times</button>
//         <button onClick={this.clearCount}>Clear counter</button>
//       </div>
//     );
//   };
// }

export default App;

import React, { Component, useState, useEffect } from 'react';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react');
  const [loading, setLoading] = useState(false);

  const fetchNews = () => {
    setLoading(true);
    fetch(url)
      .then(result => result.json())
      .then(data => (setNews(data.hits), setLoading(false)))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  return(
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchQuery}
          onChange={handleChange}/>
        <button>Search</button>
        {loading ? <h4>Loading...</h4> : ''}
      </form>
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

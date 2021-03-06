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

  const showLoading = () => {
    return(
      loading ? <h4>Loading...</h4> : ''
    );
  };

  const searchForm = () => {
    return(
      <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchQuery}
        onChange={handleChange}/>
      <button>Search</button>
      {showLoading()}
    </form>
    );
  };

  const showNews = () => {
    return(
      news.map((n, i) => (
        <p key={i}>
          {n.title}
        </p>
      ))
    );
  };

  return(
    <div>
      <h2>News</h2>
      {searchForm()}
      {showNews()}
    </div>
  );
};

export default App;

import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <input placeholder="Enter your location"></input>
        <button>Search</button>
      </div>
    )
  }
}

export default Search;
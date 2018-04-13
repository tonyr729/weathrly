import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInputLocation: ""
    };
  }

  updateLocation = (event) => {
    this.setState({ userInputLocation: event.target.value })
  }

  render() {
    return (
      <div className="search">
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.submitLocation(this.state);
        } }>
        <input placeholder="Denver, CO"
               value={ this.state.userInputLocation } 
               onChange={ this.updateLocation }
               />
        <input type='submit' value='Search' />
      </form>
      </div>
    )
  }
}

export default Search;
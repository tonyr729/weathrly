import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: ""
    };

  }

  updateLocation = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="search">
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.submitLocation(this.state);
        } }>
        <input placeholder="Enter your city"
               value={ this.state.city } 
               onChange={ this.updateLocation }
               name='city' />
        <input placeholder="Enter your state" 
               value={ this.state.state }  
               onChange={ this.updateLocation } 
               name='state'/>
        <input type='submit' value='Search' />
      </form>
      </div>
    )
  }
}

export default Search;
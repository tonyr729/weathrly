import React, { Component } from 'react';
import DataList from './DataList';
import locationList from './locationList';
import Trie from '@danielafcarey/autocomplete';
const locationTree = new Trie();
locationTree.populate(locationList.data);

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInputLocation: '',
      locationTree: locationTree,
      suggestionsArray: []
    };
  }

  updateLocation = (event) => {
    this.setState({ userInputLocation: event.target.value }, this.getSuggestions())
  }
  
  clearSuggestions() {
    if (this.state.userInputLocation === '') {
      this.setState({ suggestionsArray: [] })
    }
  }
  
  getSuggestions() {
    this.clearSuggestions()
    let locationSuggestions;

    if (isNaN(parseInt(this.state.userInputLocation)) && this.state.userInputLocation.length > 1) {
      locationSuggestions = locationTree.suggest(this.state.userInputLocation)
    }

    if (locationSuggestions) {
      this.setState({suggestionsArray: locationSuggestions})
    }
  }

  sendLocation = (event) => {
    event.preventDefault();
    this.props.submitLocation(this.state);
  }

  render() {
    return (
      <div className="search">
      <form onSubmit={ this.sendLocation }>
        <input className="awesomplete"
               placeholder="Denver, CO"
               value={ this.state.userInputLocation } 
               onChange={ this.updateLocation }
               list="DataList"
               />
        <DataList suggestions={ this.state.suggestionsArray }/>
        <input type='submit' value='Search' />
      </form>
      </div>
    )
  }
}

export default Search;
import React, {Component} from 'react';
import locationList from './locationList';
import Trie from '@danielafcarey/autocomplete'
const locationTree = new Trie();
locationTree.populate(locationList.data)

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInputLocation: '',
      locationTree: locationTree
    };
  }

  updateLocation = (event) => {
    this.setState({ userInputLocation: event.target.value })
    // showSuggestions()
  }

  // showSuggestions() {
  //   this.locationTree.suggest(this.state.userInputLocation)
  // }

  sendLocation = (event) => {
    event.preventDefault();
    this.props.submitLocation(this.state);
  }

  render() {
    return (
      <div className="search">
      <form onSubmit={ this.sendLocation }>
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
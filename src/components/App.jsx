import React, { Component } from 'react';
import PuppyForm from './PuppyForm/PuppyForm.jsx';
import PuppyList from './PuppyList/PuppyList.jsx';
import './normalize.css';
import style from './App.css';

// CREATE A REACT COMPONENT CALLED APP
class App extends Component {

  constructor() {
    super();

    this.state = {
      puppies: [],
      puppyFormName: '',
      puppyFormURL: ''
    };
  }

  updateFormName(e) {
    this.setState({
      puppyFormName: e.target.value,
    });
  }

  updateFormURL(e) {
    this.setState({
      puppyFormURL: e.target.value,
    });
  }

  getAllPuppies() {
    fetch(`/puppies`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        puppies: data
      });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }

  handleAbandonPuppy(id) {
    fetch(`/puppies/${id}`, {
      method: 'delete'
    })
    .then(() => {
      let puppies = this.state.puppies.filter((puppy) => {
        return puppy.id !== id;
      });
      this.setState({ puppies });
    })
    .catch(err => console.log(err));
  }

  handleLikePuppy(id) {
    fetch(`/puppies/like/${id}`, {
      method: 'PUT'
    })
    .then(() => {
      let puppies = this.state.puppies.map((puppy) => {
        if(puppy.id === id) puppy.likes += 1;
        return puppy;
      })
      this.setState({ puppies});
    })
    .catch(err => console.log(err));
  }

  handleFormSubmit() {
    fetch('/puppies', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.puppyFormName,
        url: this.state.puppyFormURL
      })
    })
    .then(this.setState({
      puppyFormName: '',
      puppyFormURL: ''
    }))
    .then(this.getAllPuppies())
    .catch(err => console.log(err));
  }

render(){
  return (
    <div id="app-container">
      <header>
        <h1>Hello</h1>
        <img src="http://49.media.tumblr.com/tumblr_md12asbGTX1r5c792o5_250.gif" alt="puppy" />
      </header>
    <PuppyForm
      puppyFormName={this.state.puppyFormName}
      updateFormName={event => this.updateFormName(event)}
      puppyFormURL={this.state.puppyFormURL}
      updateFormURL={event => this.updateFormURL(event)}
    />
    <h3>These are our adopted puppies</h3>
    <PuppyList
      puppies={this.state.puppies}
      getAllPuppies={this.getAllPuppies.bind(this)}
      handleAbandonPuppy={this.handleAbandonPuppy.bind(this)}
      handleLikePuppy={this.handleLikePuppy.bind(this)}
    />
    </div>
    );
  }
}

export default App;

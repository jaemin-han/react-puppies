import React, { Component } from 'react';
import PuppyListItem from '../PuppyListItem/PuppyListItem.jsx';
import style from './PuppyList.css';

// create a React Component called _App_
class PuppyList extends Component {

  componentWillMount() {
    this.props.getAllPuppies();
  }

  renderPuppies() {
    return this.props.puppies.map((puppy, i) =>
      <PuppyListItem
        key={i}
        name={puppy.name}
        url={puppy.url}
        likes={puppy.likes}
        id={puppy.id}
        handleAbandonPuppy={this.props.handleAbandonPuppy}
        handleLikePuppy={this.props.handleLikePuppy}
      />
    );
  }
  render(){
    console.log(style)
    return (
      <div id={style['puppy-list-container']}>
        {this.renderPuppies()}
      </div>
    );
  }
}

export default PuppyList;

import React, { Component } from 'react';
import style from './PuppyListItem.css';

const PuppyListItem = props => (
  <div className={style['puppy-list-item']}>
    <h4>{props.name}</h4>
    <div className={style['puppy-picture']}>
      <img src={props.url} alt={props.name}/>
    </div>
    <p>Likes: {props.likes}</p>
    <button onClick={() => props.handleLikePuppy(props.id)}>
      Like!
    </button>
    <button onClick={() => props.handleAbandonPuppy(props.id)}>
      Abandon
    </button>
  </div>
);

export default PuppyListItem;

import React, { component } from 'react';
import style from './PuppyForm.css';

// REACT COMPONENT PUPPYFORM
class PuppyForm extends Component {

  render(){
    return (
      <div id={style['form-container']}>
        <input
          type="text"
          placeholder="Enter a Puppy Name"
          value={this.props.puppyFormName}
          onChange={this.props.updateFormName}
        />
        <input
          type="text"
          placeholder="Cute Puppy URL YESSS!"
          value={this.props.puppyFormURL}
          onChange={this.props.updateFormURL}
        />
        <button onClick={this.props.handleFormSubmit}>Adopt!</button>
      </div>
    );
  }
}

export default PuppyForm;

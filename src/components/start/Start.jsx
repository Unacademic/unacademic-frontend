import React from 'react';
import classnames from 'classnames';
import Actions from '../../actions/index';

class Start extends React.Component{

  constructor(props){
    super(props);
    this.name = 'logo';
  }

  handleClick(selection){
    let selection = { id: 'all', type: 'waypoints' };
    Actions.setLevel(selection);
  }

  classes(){
    return classnames({
      [this.name]: true,
    });
  }

  render() {
    return (
      <div className={ this.classes() }>
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big` }>Start</button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big ${this.name}-big-inverse` }>Learn by Dwelling</button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big ${this.name}-big-inverse` }>Today</button><br/>
      </div>
    )
  }
};

export default Start;

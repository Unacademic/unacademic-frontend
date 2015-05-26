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
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big ${this.name}-big-inverse` }>Tiny Bits of Structure</button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big ${this.name}-big-inverse` }>Lots of Learning</button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${this.name}-big` }>Start Here</button><br/>
      </div>
    )
  }
};

export default Start;

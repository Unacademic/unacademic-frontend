import React from "react";
import classnames from "classnames";
import Actions from "../../actions/index";

class Start extends React.Component{

  constructor(props){
    super(props);
    this.name = "introduction";
  }

  handleClick(){
    let selection = { id: "all", type: "waypoints" };
    Actions.setLevel(selection);
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let barClass = "textbar";
    return (
      <div className={ this.classes() }>
      <button onClick={ this.handleClick.bind(this) } className={ `${barClass} ${barClass}-big ${barClass}-inverse` }>
        Tiny Bits of Structure
      </button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${barClass} ${barClass}-big ${barClass}-inverse` }>
        Lots of Learning
      </button><br/>
      <button onClick={ this.handleClick.bind(this) } className={ `${barClass} ${barClass}-big` }>
        Start Here
      </button><br/>
      </div>
    );
  }
}

export default Start;

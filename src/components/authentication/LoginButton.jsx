import React from "react";
import classnames from "classnames";
import Actions from "../../actions/index";

class LoginButton extends React.Component{

  constructor(props){
    super(props);
    this.name = "login";
  }

  handleClick(){
    Actions.setLevel({ type: "feedback" });
  }

  classes(){
    let { userId } = this.props;
    let activeClass = `${this.name}-is-active`;

    return classnames({
      [this.name]: true,
      [activeClass]: userId
    });
  }

  render() {
    return (
      <li onClick={ this.handleClick.bind(this) } className={ this.classes() }>
        Feedback
      </li>
    );
  };
}

LoginButton.propTypes = {
  userId: React.PropTypes.string
};

export default LoginButton;

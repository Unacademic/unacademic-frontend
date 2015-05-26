import React from 'react';
import classnames from 'classnames';
import Actions from '../../actions/index';

class LoginButton extends React.Component{

  constructor(props){
    super(props);
    this.name = 'login';
  }

  handleClick(){
    alert('coming soon...');
    // Actions.authenticate();
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
    let { userId } = this.props;
    return (
      <li onClick={ this.handleClick.bind(this) } className={ this.classes() }>
        { userId || 'Feedback' }
      </li>
    )
  }
};

LoginButton.propTypes  = {
  userId: React.PropTypes.string
}

export default LoginButton;

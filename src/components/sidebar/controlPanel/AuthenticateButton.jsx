import React from 'react';
import Actions from '../../../actions/index';

class AuthenticateButton extends React.Component {

  authenticate(){
    Actions.authenticate();
  }

  render() {
    let { user } = this.props;
    let button;
    let title = user ? _.capitalize(user) : 'Sign In';
    return (
      <section className="authentication-panel">
        <button disabled={ !!user } className="authentication-button" onClick={ this.authenticate }>
          { title }
        </button>
      </section>
    )
  }
};

AuthenticateButton.propTypes = {
  user: React.PropTypes.string.isRequired,
};

export default AuthenticateButton;

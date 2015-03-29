import React from 'react';
import Actions from '../../../actions/index';

class AuthenticateButton extends React.Component {

  authenticate(){
    Actions.authenticate();
  }

  render() {
    return (
      <section className="authenticate">
        <button ref="authenticateButton" onClick={ this.authenticate }>Sign In</button>
      </section>
    )
  }
};

export default AuthenticateButton;

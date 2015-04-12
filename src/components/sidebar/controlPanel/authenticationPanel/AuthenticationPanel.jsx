import React from 'react';
import Actions from '../../../../actions/index';

class AuthenticateButton extends React.Component {

  authenticate(){
    Actions.authenticate();
  }

  render() {
    let { user } = this.props;
    let button;
    let title = user ? _.capitalize(user) : 'Sign In';
    return (
      <section className="panel panel-authentication">
        <button disabled={ !!user } className="btn btn-authentication" onClick={ this.authenticate }>
          { title }
        </button>
      </section>
    )
  }
};

AuthenticateButton.propTypes = {
  user: React.PropTypes.string
};

export default AuthenticateButton;

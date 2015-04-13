import React from 'react';
import Actions from '../../../actions/index';

class AuthenticationPanel extends React.Component {

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

AuthenticationPanel.propTypes = {
  user: React.PropTypes.string
};

export default AuthenticationPanel;

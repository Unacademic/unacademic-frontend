import React from 'react';
import Actions from '../../actions/index';

class Logo extends React.Component {

  switchMode(mode){
    let newMode = mode === 'learn' ? 'curate' : 'learn';
    Actions.switchMode(newMode);
  }

  render() {
    let { learn, curate } = this.props.modes;
    let mode = learn ? 'learn' : 'curate';
    let classes = ['logo', `logo-is-${ mode }`].join(' ');
    let title = learn ? '_Unacademic' : 'Unacademic_';
    return (
      <section onClick={ this.switchMode.bind(this, mode) } className={ classes }>
        <h1>{ title }</h1> 
      </section>
    )
  }
};

Logo.propTypes = {
  modes: React.PropTypes.object
}

export default Logo;

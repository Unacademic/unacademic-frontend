import React from 'react';
import Actions from '../../actions/index';

class Logo extends React.Component {

  render() {
    let { learn, curate } = this.props.modes;
    let mode = learn ? 'learn' : 'curate';
    let classes = ['logo', `logo-is-${ mode }`].join(' ');
    let title = learn ? '_Offcourse' : 'Offcourse_';

    return (
      <section className={ classes }>
        <button>{ title }</button>
      </section>
    )
  }
};

Logo.propTypes = {
  modes: React.PropTypes.object
}

export default Logo;

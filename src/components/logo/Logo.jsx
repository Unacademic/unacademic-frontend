import React from 'react';
import classnames from 'classnames';

class Logo extends React.Component {
  constructor(props){
    super(props);
    this.name = 'logo';
  }

  classes(){
    let { mode } = this.props;
    let classes = ['logo', `logo-is-${ mode }`].join(' ');
    let modeClass = `${this.name}-is-${mode}`;

    return classnames({
      [this.name]: true,
      [modeClass]: mode
    });
  }

  render() {
    let { mode } = this.props;
    let title = mode === 'learn' ? 'Offcourse_' : '_Offcourse';

    return (
      <section className={ this.classes() }>
        <button>{ title }</button>
      </section>
    )
  }
};

Logo.propTypes = {
  mode: React.PropTypes.string
}

export default Logo;

import React from 'react';
import classnames from 'classnames';

class LogoExtended extends React.Component {
  constructor(props){
    super(props);
    this.name = 'logo';
  }

  classes(){
    let { mode } = this.props;
    let modeClass = `${this.name}-is-${mode}`;

    return classnames({
      [this.name]: true,
      [modeClass]: mode
    });
  }

  render() {
    let { mode } = this.props;
    let title = mode === 'learn' ? '_Offcourse' : 'Offcourse_';

    return (
      <section className={ this.classes() }>
        <button>{ title }</button>
        <p>Tiny Bits of Structure</p><br/>
        <p>Lots of Learning</p><br/>
        <p>Start</p><br/>
        <p>Dwelling Today</p>
      </section>
    )
  }
};

LogoExtended.propTypes = {
  mode: React.PropTypes.string
}

export default LogoExtended;
